import { TestBed,ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'angular13'`, () => {
    expect(component.title).toEqual('angular13');
  });

  it('should render title should be angular13', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('angular13');
  });
  it('form Valid',()=>{
      expect(component.profileForm.valid).toBeFalsy();
      component.profileForm.controls['firstName'].setValue('Murali');
      component.profileForm.controls['lastName'].setValue('tharan');
      component.submit();
      expect(component.profileForm.valid).toBeTruthy();
      //expect(component.profileForm).toHaveBeenCalled();
  });
  it('form Invalid',()=>{
      component.submit();
      expect(component.profileForm.valid).toBeFalsy();
  });
  it('updateProfile() shoud call method',()=>{
     component.profileForm.controls['firstName'].setValue('Murali');
     component.profileForm.controls['lastName'].setValue('tharan');
     component.updateProfile();
  });
});
