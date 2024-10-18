import { Component } from '@angular/core';

interface Image {
  url: string;
  description: string;
}

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrl: './image-gallery.component.css'
})
export class ImageGalleryComponent {
  images: Image[] = [
    { url: 'https://i.namu.wiki/i/nmDUHmscFOwu0c9MAM139QmgA_5dCl3FY1_i07tzyGhhqSmf8LKMX8b5_wAFSWTglRXQInvqU0KREuFdPX_pynvW8ChmECrYF5DDkEOV-N_VyWbIeodIwYspgu8pyqfU3oGB0XBNpFGEX2nbY8nHHg.webp', 
      description: 'W' },
    { url: 'https://i.namu.wiki/i/lyd3jAxKFH_RHb9W4LHTJ-ErVUi5uZ5NQb-xHiT7AebFHivYtmzWvuu-WTKq68S6RD_C89JT6Blz0SElDCdUsdc9LSOx00hp3dqk-mfy5znJb3OtBayr4eV56MT-6xcX21ctm_Tsq3tFFORjDL-M8w.webp'
      , description: 'Skull' },
    { url: 'https://i.namu.wiki/i/jCxuRkfl1nntKSOdWAm9Hn3Uw5m_HnsC7vnKnYtd3UPH0xkt4ywVlkGsWVxV1ZZRwEVIGF73Nn9Sq0nyC9btuIU_R4VBEHbsR6dnKFeL08E8VgGbSVHnbcSwGrSBe0JVp3uf0E7vA8781uD72I7BHQ.webp', 
      description: 'OOO' },
    { url: 'https://i.namu.wiki/i/F529hOsugTvA9wn5kSgCOSW8cTuP4_ut-VKy_n9QpLdHovy3TMF-HL7iSAHJfvvjDsWLppSBkjSMvvb8q9JTbPV7f25AD7drV7DoghCJ5dYpu2gW9NtInjxpc9Vw4q4Pos4ZL025y2gjF5lu2BIkYw.webp', 
        description: 'Birth' },
    { url: 'https://i.namu.wiki/i/i6QdKQpIxyS2TVLDqIGZLYNsk3N1uSZ8uMVk0JKgkHELXUHwzYZdrQd8utUCZgaMOfVHQtXEAyc7X8hOFn9y2HIEwxrnmNuEvWtb3G2T-jALAvRuGjg4t5HpfysVHq3dcniDYybYDoa8DqWHKa-t3A.webp', 
        description: 'Zi-O' }    
    
  ];
}
