import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

it('should have the close method', () => {
  const fixture = TestBed.createComponent(HeaderComponent);
  const header = fixture.componentInstance;
  // Mock the ipc object (electron object)
  header['ipc'] = {
    closeWindow: () => {},
  };
  expect(() => {
    header.close();
  }).toBeDefined();
  expect(() => {
    header.close();
  }).not.toThrowError();
});

it('should have the maximize method', () => {
  const fixture = TestBed.createComponent(HeaderComponent);
  const header = fixture.componentInstance;
  // Mock the ipc object (electron object)
  header['ipc'] = {
    maximizeWindow: () => {},
  };
  expect(() => {
    header.maximize();
  }).toBeDefined();
  expect(() => {
    header.maximize();
  }).not.toThrowError();
});

it('should have the minimize method', () => {
  const fixture = TestBed.createComponent(HeaderComponent);
  const header = fixture.componentInstance;
  // Mock the ipc object (electron object)
  header['ipc'] = {
    minimizeWindow: () => {},
  };
  expect(() => {
    header.minimize();
  }).toBeDefined();
  expect(() => {
    header.minimize();
  }).not.toThrowError();
});
