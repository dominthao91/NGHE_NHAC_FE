import { Component, OnInit } from '@angular/core';
import {ChangeAvatar} from '../../model/ChangeAvatar';
import {AuthService} from '../../service/auth.service';
import {TokenService} from '../../service/token.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-change-avatar',
  templateUrl: './change-avatar.component.html',
  styleUrls: ['./change-avatar.component.scss']
})
export class ChangeAvatarComponent implements OnInit {
  roles2: any = ['ADMIN'];
  roles1: any = ['USER'];
  status = 'Tìm ảnh';
  changeAvatar: ChangeAvatar;
  Form: any = {};
  success: any = {
    message: 'yes'
  };
  constructor(private authService: AuthService,
              private tokenService: TokenService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onChangeAvatar($event) {
    this.Form.avatar = $event;
    console.log('event -->', $event);
  }

  onSubmit() {
    this.changeAvatar = new ChangeAvatar(
      this.Form.avatar
    );
    this.authService.changeAvatar(this.changeAvatar).subscribe(data => {
      console.log(data);
      if (JSON.stringify(data) === JSON.stringify(this.success)) {
        this.status = 'Thay ảnh đại diện thành công!';
        this.tokenService.setAvatar(this.Form.avatar);
        if (JSON.stringify(this.tokenService.getRole()) === JSON.stringify(this.roles2)) {
          this.router.navigate(['admin-account']).then(() => {
            window.location.reload();
          });
        } else if (JSON.stringify(this.tokenService.getRole()) === JSON.stringify(this.roles1)) {
          this.router.navigate(['']).then(() => {
            window.location.reload();
          });
        }
      }
    });
  }
}
