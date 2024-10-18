import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteTakingAppComponent } from './note-taking-app.component';

describe('NoteTakingAppComponent', () => {
  let component: NoteTakingAppComponent;
  let fixture: ComponentFixture<NoteTakingAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoteTakingAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoteTakingAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
