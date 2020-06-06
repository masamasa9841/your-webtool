import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NavBar, NavBarModule } from './navbar';
import { DocsAppTestingModule } from 'testing/testing.module';

describe('NavBar', () => {
  let component: NavBar;
  let fixture: ComponentFixture<NavBar>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavBar],
      imports: [NavBarModule, DocsAppTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
