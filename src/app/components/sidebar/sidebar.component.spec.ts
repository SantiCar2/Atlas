import { TestBed } from '@angular/core/testing';
import { SidebarComponent } from './sidebar.component';
import { RouterModule } from '@angular/router';

describe('SidebarComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarComponent, RouterModule.forRoot([])],
    }).compileComponents();
  });

  it('should create the sidebar', () => {
    const fixture = TestBed.createComponent(SidebarComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
