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

  it('should update currentRoute when navigation ends', () => {
    const fixture = TestBed.createComponent(SidebarComponent);
    const component = fixture.componentInstance;

    component['router'].navigateByUrl('/downloads').then(() => {
      expect(component.currentRoute).toBe('/downloads');
      expect(component.updateCurrentRoute).toHaveBeenCalled();
    });
  });

  it('should update currentRoute when updateCurrentRoute is called', () => {
    const fixture = TestBed.createComponent(SidebarComponent);
    const component = fixture.componentInstance;

    component.updateCurrentRoute('/about');
    expect(component.currentRoute).toBe('/about');
  });

  it('should call ngOnInit', () => {
    const fixture = TestBed.createComponent(SidebarComponent);
    const component = fixture.componentInstance;

    spyOn(component, 'ngOnInit');
    component.ngOnInit();
    expect(component.ngOnInit).toHaveBeenCalled();
  });
});
