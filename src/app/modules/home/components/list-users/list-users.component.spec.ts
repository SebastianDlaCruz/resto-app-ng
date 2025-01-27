import { ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { UserComponent } from '../user/user.component';
import { ListUsersComponent } from './list-users.component';

describe('ListUsersComponent', () => {
  let component: ListUsersComponent;
  let fixture: ComponentFixture<ListUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListUsersComponent, UserComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ListUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should not render users when the users array is empty', () => {

    component.users = [];
    fixture.detectChanges();

    const userComponent = fixture.debugElement.queryAll(By.css('app-user'));
    expect(userComponent.length).toBe(0);

  });



  it('should display message when users array is empty in HTML', () => {

    component.users = [];
    fixture.detectChanges();

    const element = fixture.debugElement.queryAll(By.css('#not-users'));
    expect(element).toBeTruthy();


  });


  it('should render users', () => {
    const userComponent = fixture.debugElement.queryAll(By.css('app-user'));
    expect(userComponent.length).toBe(4);
    const users = component.users;

    userComponent.forEach((userComp, index) => {
      const userInstance = userComp.componentInstance;
      expect(userInstance.user).toEqual(users[index]);
    })
  })




});
