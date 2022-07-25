import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

import { FuseMediaWatcherService } from '@fuse/services/media-watcher';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientsComponent implements OnInit {
  @ViewChild('drawer') drawer: MatDrawer;
  drawerMode: 'over' | 'side' = 'side';
  drawerOpened: boolean = true;
  panels: any[] = [];
  selectedPanel: string = 'add';
  private _unsubscribeAll: Subject<any> = new Subject<any>();



  constructor(private _fuseMediaWatcherService: FuseMediaWatcherService,
    private _changeDetectorRef: ChangeDetectorRef,) { }

  ngOnInit(): void {



    // Setup available panels
    this.panels = [
      {
        id: 'add',
        icon: 'heroicons_outline:save',
        title: 'Add a client to system',
        description: 'Add a client'
      },
      {
        id: 'edit',
        icon: 'heroicons_outline:pencil',
        title: 'Edit client details',
        description: 'Manage your subscription plan, payment method and billing information'
      },
      {
        id: 'account',
        icon: 'heroicons_outline:user-circle',
        title: 'Account',
        description: 'Manage your public profile and private information'
      },


      // {
      //   id: 'notifications',
      //   icon: 'heroicons_outline:bell',
      //   title: 'Notifications',
      //   description: 'Manage when you\'ll be notified on which channels'
      // },
      // {
      //   id: 'team',
      //   icon: 'heroicons_outline:user-group',
      //   title: 'Team',
      //   description: 'Manage your existing team and change roles/permissions'
      // }
    ];

    // Subscribe to media changes
    this._fuseMediaWatcherService.onMediaChange$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(({ matchingAliases }) => {

        // Set the drawerMode and drawerOpened
        if (matchingAliases.includes('lg')) {
          this.drawerMode = 'side';
          this.drawerOpened = true;
        }
        else {
          this.drawerMode = 'over';
          this.drawerOpened = false;
        }

        // Mark for check
        this._changeDetectorRef.markForCheck();
      });
  }

  /**
     * On destroy
     */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }


  /**
   * Navigate to the panel
   *
   * @param panel
   */
  goToPanel(panel: string): void {
    this.selectedPanel = panel;

    // Close the drawer on 'over' mode
    if (this.drawerMode === 'over') {
      this.drawer.close();
    }
  }

  /**
   * Get the details of the panel
   *
   * @param id
   */
  getPanelInfo(id: string): any {
    return this.panels.find(panel => panel.id === id);
  }

  /**
   * Track by function for ngFor loops
   *
   * @param index
   * @param item
   */
  trackByFn(index: number, item: any): any {
    return item.id || index;
  }

}
