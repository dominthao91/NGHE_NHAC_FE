import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';

import { HomeComponent } from './pages/home/home.component';
import { GettingStartedComponent } from './pages/gettingstarted/gettingstarted.component';

import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';

import {FooterModule} from './shared/footer';
import { RegisterComponent } from './form-login/register/register.component';
import { LoginComponent } from './form-login/login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AdminAccountComponent } from './form-login/admin-account/admin-account.component';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment.prod';
import { UploadAvatarComponent } from './upload/upload-avatar/upload-avatar.component';
import { ChangeAvatarComponent } from './manager-profile/change-avatar/change-avatar.component';
import {httpInterceptorProvider} from './security/auth.interceptor';
import { ListUserComponent } from './admin-manager/list-user/list-user.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTableModule} from '@angular/material/table';
import { ListSongComponent } from './song-manager/list-song/list-song.component';
import {MatTabsModule} from '@angular/material/tabs';

import { ChangeProfileComponent } from './manager-profile/change-profile/change-profile.component';
import { ChangePasswrordComponent } from './manager-profile/change-passwrord/change-passwrord.component';
import { ChangeManageComponent } from './manager-profile/change-manage/change-manage.component';

import { DialogComponent } from './song-manager/dialog/dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { EditSongComponent } from './song-manager/edit-song/edit-song.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { UploadMusicComponent } from './upload/upload-music/upload-music.component';
import {MatSelectModule} from '@angular/material/select';
import { CreateSongComponent } from './song-manager/create-song/create-song.component';
import { EditSingerComponent } from './singer-manager/edit-singer/edit-singer.component';
import { CreateSingerComponent } from './singer-manager/create-singer/create-singer.component';
import { SingerListComponent } from './singer-manager/singer-list/singer-list.component';
import { AudioPlayerComponent } from './song-manager/audio-player/audio-player.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {SecondsToMinutesPipe} from './song-manager/pipe/seconds-to-minutes';
import {MatSliderModule} from '@angular/material/slider';
import {MatExpansionModule} from '@angular/material/expansion';
import { MusicNewComponent } from './song-manager/music-new/music-new.component';
import { MusicSuggestComponent } from './song-manager/music-suggest/music-suggest.component';
import { MusicCountComponent } from './song-manager/music-count/music-count.component';
import { SongDetailComponent } from './song-manager/song-detail/song-detail.component';
import { UserAccountComponent } from './form-login/user-account/user-account.component';
import { CommentDialogComponent } from './song-manager/comment-dialog/comment-dialog.component';
import { SongSearchComponent } from './song-manager/song-search/song-search.component';
import {NavBarComponent} from './shared/navbar';
import { CreateSongUserComponent } from './user-manager/create-song-user/create-song-user.component';
import { UserSongListComponent } from './user-manager/user-song-list/user-song-list.component';
import { HomePlaylistComponent } from './user-manager/user-playlist/home-playlist/home-playlist.component';
import { DeletePlaylistComponent } from './user-manager/user-playlist/delete-playlist/delete-playlist.component';
import { CreatePlaylistComponent } from './user-manager/user-playlist/create-playlist/create-playlist.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { ShowPlaylistComponent } from './user-manager/user-playlist/show-playlist/show-playlist.component';
import { ListAddSongComponent } from './user-manager/user-playlist/list-add-song/list-add-song.component';
import {_MatMenuDirectivesModule, MatMenuModule} from '@angular/material/menu';
import {AdminGuard} from './security/admin.guard';
import {UserGuard} from './security/user.guard';
import {AuthGuard} from './security/auth.guard';








export const appRoutes: Routes = [
  { path: '', component: HomeComponent, data: { title: 'Home' } },
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin-account', component: AdminAccountComponent, canActivate: [AdminGuard]},
  {path: 'upload-avatar', component: UploadAvatarComponent , canActivate: [AuthGuard]},
  {path: 'change-avatar', component: ChangeAvatarComponent, canActivate: [AuthGuard]},
  {path: 'change-password' , component: ChangePasswrordComponent, canActivate: [AuthGuard]},
  {path: 'change-manage', component: ChangeManageComponent, canActivate: [AuthGuard]},
  {path: 'change-profile', component: ChangeProfileComponent, canActivate: [AuthGuard]},

  {path: 'update-song/:id', component: EditSongComponent ,canActivate: [AdminGuard]},
  {path: 'create-song', component: CreateSongComponent ,canActivate:[AdminGuard]},
  {path: 'update-singer/:id', component: EditSingerComponent ,canActivate:[AdminGuard]},
  {path: 'create-singer', component: CreateSingerComponent ,canActivate:[AdminGuard]},
  {path: 'song-new', component: MusicNewComponent},
  {path: 'song-suggest', component: MusicSuggestComponent},
  {path: 'song-count', component: MusicCountComponent},
  {path: 'song-search/:searchKey', component: SongSearchComponent},
  {path: 'create-song-user', component: CreateSongUserComponent ,canActivate:[UserGuard]},
  {path: 'user-list', component: UserSongListComponent ,canActivate:[UserGuard]},
  {path: 'home-playlist', component: HomePlaylistComponent ,canActivate:[UserGuard]},
  {path: 'show-playlist/:id', component: ShowPlaylistComponent ,canActivate:[UserGuard]},
  {
    path: 'guide/getting-started',
    component: GettingStartedComponent,
    data: { title: 'Getting Started' }
  }
];

@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [AppComponent, HomeComponent, GettingStartedComponent, RegisterComponent, LoginComponent, AdminAccountComponent, UploadAvatarComponent, ChangeAvatarComponent, ListUserComponent, ListSongComponent, DialogComponent, EditSongComponent, UploadMusicComponent, CreateSongComponent, EditSingerComponent, CreateSingerComponent, SingerListComponent, ChangePasswrordComponent, ChangeManageComponent, ChangeProfileComponent, AudioPlayerComponent, SecondsToMinutesPipe, MusicNewComponent, MusicSuggestComponent, MusicCountComponent, SongDetailComponent, UserAccountComponent, CommentDialogComponent, SongSearchComponent, NavBarComponent, CreateSongUserComponent, UserSongListComponent, HomePlaylistComponent, DeletePlaylistComponent, CreatePlaylistComponent, ShowPlaylistComponent, ListAddSongComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatButtonModule,
    BrowserAnimationsModule,
    FooterModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    // tslint:disable-next-line:max-line-length
    RouterModule.forRoot(appRoutes, {useHash: false}), MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, MatPaginatorModule, MatProgressSpinnerModule, MatTableModule, MatTabsModule, MatDialogModule, MatDatepickerModule, MatSelectModule, MatGridListModule, MatSliderModule, MatExpansionModule, MatProgressBarModule, _MatMenuDirectivesModule, MatMenuModule
  ],
  providers: [httpInterceptorProvider],
  exports: [
    SongSearchComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
