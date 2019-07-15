import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const routes = {
  product: (c: ProductContext) => `/v1/product/${c.sku}`
};

export interface ProductContext {
  sku: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  getProduct(context: ProductContext): Observable<string> {
    return this.httpClient
      .cache()
      .get(routes.product(context))
      .pipe(
        map((body: any) => body),
        catchError(() => of('Error, could not load joke :-('))
      );
  }

  getAllProducts() {
    return of([{
      'name': 'CONSOLA PS4 HIT BUNDLE 5 1 T + 3 JUEGOS',
      'url': '//home.ripley.cl/store/Attachment/WOP/D172/2000374695633/2000374695633_2.jpg' ,
      'sku': '2000374695633P' ,
      'price': '$349.990'
    },
    {
      'name': 'CONSOLA NINTENDO SWITCH',
      'url': '//home.ripley.cl/store/Attachment/WOP/D172/2000363222529/2000363222529_2.jpg' ,
      'sku': '2000363222529P' ,
      'price': '$329.990'
    },
    {
      'name': 'CONSOLA SONY PS4 FAMILY BUNDLE',
      'url': '//home.ripley.cl/store/Attachment/WOP/D172/2000375421729/2000375421729_2.jpg' ,
      'sku': '2000375421729P' ,
      'price': '$349.990'
    },
    {
      'name': 'SUPER MARIO MAKER 2',
      'url': '//home.ripley.cl/store/Attachment/WOP/D172/2000375066203/2000375066203_2.jpg' ,
      'sku': '2000375066203P' ,
      'price': '$52.990'
    },
    {
      'name': 'KIT SONY PS4 VR + ASTRO BOT Y MOSS',
      'url': '//home.ripley.cl/store/Attachment/WOP/D172/2000372296986/2000372296986_2.jpg' ,
      'sku': '2000372296986P' ,
      'price': '$329.990'
    },
    {
      'name': 'CRASH TEAM RACING PS4',
      'url': '//home.ripley.cl/store/Attachment/WOP/D172/2000373934382/2000373934382_2.jpg' ,
      'sku': '2000373934382P' ,
      'price': '$34.990'
    },
    {
      'name': 'CONSOLA NINTENDO NES + 30 JUEGOS PREINSTALADOS',
      'url': '//home.ripley.cl/store/Attachment/WOP/D172/2000360644614/2000360644614_2.jpg' ,
      'sku': '2000360644614P' ,
      'price': '$79.990'
    },
    {
      'name': 'CONSOLA SONY PS1 CLASSIC',
      'url': '//home.ripley.cl/store/Attachment/WOP/D172/2000372302335/2000372302335_2.jpg' ,
      'sku': '2000372302335P' ,
      'price': '$129.990'
    },
    {
      'name': 'CRASH TEAM RACING SWITCH',
      'url': '//home.ripley.cl/store/Attachment/WOP/D172/2000373934399/2000373934399_2.jpg' ,
      'sku': '2000373934399P' ,
      'price': '$34.990'
    },
    {
      'name': 'CONSOLA MICROSOFT XBOX ONE X + FH4 + F7 + TARJETA LIVE 12M',
      'url': '//home.ripley.cl/store/Attachment/WOP/D172/2000372474353/2000372474353_2.jpg' ,
      'sku': '2000372474353P' ,
      'price': '$479.990'
    },
    {
      'name': 'CONSOLA PS4 DAYS OF PLAY',
      'url': '//home.ripley.cl/store/Attachment/WOP/D172/2000374695626/2000374695626_2.jpg' ,
      'sku': '2000374695626P' ,
      'price': '$349.990'
    },
    {
      'name': 'CONSOLA SONY PS4 PRO',
      'url': '//home.ripley.cl/store/Attachment/WOP/D172/2000366336421/2000366336421_2.jpg' ,
      'sku': '2000366336421P' ,
      'price': '$419.990'
    },
    {
      'name': 'CONSOLA NINTENDO BUNDLE 2DS BLUE + SUPERMARIO',
      'url': '//home.ripley.cl/store/Attachment/WOP/D172/2000372455413/2000372455413_2.jpg' ,
      'sku': '2000372455413P' ,
      'price': '$94.990'
    },
    {
      'name': 'NINTENDO 2DS + NEW SUPER MARIO BROS 2 + CARGADOR',
      'url': '//home.ripley.cl/store/Attachment/WOP/D172/2000366319271/2000366319271_2.jpg' ,
      'sku': '2000366319271P' ,
      'price': '$94.990'
    },
    {
      'name': 'CAMARA PLAYSTATION 4 SONY NEGRO',
      'url': '//home.ripley.cl/store/Attachment/WOP/D172/2000364604492/2000364604492_2.jpg' ,
      'sku': '2000364604492P' ,
      'price': '$52.990'
    },
    {
      'name': 'CONSOLA MICROSOFT XBOX ONE S + THE DIVISION 2',
      'url': '//home.ripley.cl/store/Attachment/WOP/D172/2000374582551/2000374582551_2.jpg' ,
      'sku': '2000374582551P' ,
      'price': '$269.990'
    },
    {
      'name': 'DAYS GONE',
      'url': '//home.ripley.cl/store/Attachment/WOP/D172/2000373934405/2000373934405_2.jpg' ,
      'sku': '2000373934405P' ,
      'price': '$49.990'
    },
    {
      'name': 'MARIO TENNIS ACES',
      'url': '//home.ripley.cl/store/Attachment/WOP/D172/2000370294564/2000370294564_2.jpg' ,
      'sku': '2000370294564P' ,
      'price': '$52.990'
    },
    {
      'name': 'POKEMON LETS GO PIKACHU',
      'url': '//home.ripley.cl/store/Attachment/WOP/D172/2000372451644/2000372451644_2.jpg' ,
      'sku': '2000372451644P' ,
      'price': '$52.990'
    },
    {
      'name': 'MORTAL KOMBAT 11',
      'url': '//home.ripley.cl/store/Attachment/WOP/D172/2000374026987/2000374026987_2.jpg' ,
      'sku': '2000374026987P' ,
      'price': '$49.990'
    },
    {
      'name': 'GOD OF WAR  (PS4)',
      // tslint:disable-next-line: max-line-length
      'url': '//ripleycl.imgix.net/http%3A%2F%2Fs3.amazonaws.com%2Fimagenes-sellers-mercado-ripley%2F2019%2F04%2F11192321%2Fgod_of_war.jpg?w=750&h=555&ch=Width&auto=format&cs=strip&bg=FFFFFF&q=60&trimcolor=FFFFFF&trim=color&fit=fillmax&ixlib=js-1.1.0&s=1675fa384e2a0ad47330c3b03bcad813' ,
      'sku': 'MPM00002615913' ,
      'price': '$35.990'
    },
    {
      'name': 'FIFA 19',
      'url': '//home.ripley.cl/store/Attachment/WOP/D172/2000371360213/2000371360213_2.jpg' ,
      'sku': '2000371360213P' ,
      'price': '$49.990'
    },
    {
      'name': 'DETROIT: BECOME HUMAN (PS4)',
      // tslint:disable-next-line: max-line-length
      'url': '//ripleycl.imgix.net/http%3A%2F%2Fs3.amazonaws.com%2Fimagenes-sellers-mercado-ripley%2F2019%2F04%2F02150107%2Fdetroit_become_human.jpg?w=750&h=555&ch=Width&auto=format&cs=strip&bg=FFFFFF&q=60&trimcolor=FFFFFF&trim=color&fit=fillmax&ixlib=js-1.1.0&s=12492e2528bdfbb5b4831b06eec89c9b' ,
      'sku': 'MPM00002470863' ,
      'price': '$22.990'
    },
    {
      'name': 'POKEMON LETS GO PIKACHU + POKE BALL',
      'url': '//home.ripley.cl/store/Attachment/WOP/D172/2000372451668/2000372451668_2.jpg' ,
      'sku': '2000372451668P' ,
      'price': '$89.990'
    }]);
  }
}
