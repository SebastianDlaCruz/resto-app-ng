import { Component } from '@angular/core';
import { heroPhoneSolid } from '@ng-icons/heroicons/solid';
import { ionLocationOutline, ionLogoFacebook, ionLogoTwitter, ionLogoWhatsapp } from '@ng-icons/ionicons';
import { List } from '../list-footer-info/model/list';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  list: List[] = [
    {
      description: 'Urquiza 2345 - Capital',
      icon: ionLocationOutline,
      title: 'Encontranos'
    },
    {
      description: '11 - 23232323',
      icon: heroPhoneSolid,
      title: 'Reservas'
    },
    {
      description: '11- 45454545',
      icon: ionLogoWhatsapp,
      title: 'WhatsApp'
    }
  ];

  faceIcon = ionLogoFacebook;
  twitterIcon = ionLogoTwitter;

}
