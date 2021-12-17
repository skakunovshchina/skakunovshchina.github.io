import { default as ReactDOM } from 'react-dom';
import { default as React } from 'react';
import { BrowserRouter } from "react-router-dom";

import App from "./components/App";
import "./main.css";

const wrapper = document.getElementById('root');

const configApp = {
    header: {
        title: 'Скакуновщина',
        instagram: 'https://www.instagram.com/skakunovshchina/',
        menu: [
            { route: '/home', title: 'Главная' },
            { route: '/map', title: 'Карта' },
            { route: '/zhigalo', title: 'Семен Жигало' },
            { route: '/1878', title: '1878' },
            { route: '/1925', title: '1925' },
            { route: '/books', title: 'Книги' },
        ],
    },

    main: {
        spreadsheets: {
            Page1925: {
                title: '1925',
                src: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vT1vzkSgpq9jEA0lV24jQ-T_6g_ddEG-BPvhb9bLZEGrmDfh5IZDjZTk7JX3PMSl4jwJJPMIENZXEFj/pubhtml'
            },
            Page1878: {
                title: '1878',
                src: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRU3D2JDjp50NNwT9dIfDMzOYqy2fOM2I_RoFt8qmrezc061SEBpdUKHXZ5qDZgaw/pubhtml'
            }
        },
        books: [
            {
                title: 'Памяць. Бешанковіцкага раёна, 1991 г.',
                imgSrc: 'https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/books%2Fpamyat_beshen_cover.jpg?alt=media&token=72ae0fe5-cef8-4be7-b27b-3bb1f680cd3f',
                downloadHref: 'https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/books%2F%D0%BA%D0%BD%D0%B8%D0%B3%D0%B0%20%D0%9F%D0%B0%D0%BC%D1%8F%D1%82%D1%8C%20%D0%91%D0%B5%D1%88%D0%BD%D0%BA%D0%BE%D0%B2%D0%B8%D1%87%D1%81%D0%BA%D0%BE%D0%B3%D0%BE%20%D1%80%D0%B0%D0%B9%D0%BE%D0%BD%D0%B0%201991.pdf?alt=media&token=3a16b957-d11d-4a2d-9727-cf264e22aaf6',
            },
            {
                title: 'Дневник Семена Жигало. Скан. копии.',
                imgSrc: 'https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/books%2Fdnevnik_semena_zhigalo_cover.png?alt=media&token=7c8d1ef7-6116-492d-87df-c545936806c0',
                downloadHref: 'https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/books%2Fdnevnik_Semena_Zhigalo.pdf?alt=media&token=23675acf-d25b-47b9-9809-674d0047b1ac',
            }
        ],
        map: {
            hatyArr: [
                { coordinates: [ 55.064837, 29.109594 ], title: "Хата", },
                { coordinates: [ 55.065191, 29.109557 ], title: "Хата", },
                { coordinates: [ 55.065382, 29.110799 ], title: "Хата", },
                { coordinates: [ 55.065507, 29.111216 ], title: "Хата", },
                { coordinates: [ 55.066188, 29.114001 ], title: "Хата", },
                { coordinates: [ 55.066494, 29.114331 ], title: "Хата", },
            ],
            objectsArr: [
                {
                    coordinates: [ 55.065942, 29.112350 ],
                    title: 'дер. Скакуновщина',
                    discription: `деревня Скакуновщина, Низголовское сельское общество`,
                    zoom: 13
                },
                {
                    coordinates: [ 55.099540, 29.120017 ],
                    title: 'дер. Сокорово',
                    discription: `деревня Сокорово, Сокоровское сельское общество`,
                    zoom: 13
                },
                {
                    coordinates: [ 55.082656, 29.078548 ],
                    title: 'Глебовщина',
                    discription: `деревня Глебовщина, Сокоровское сельское общество.`,
                    zoom: 13
                },
                {
                    coordinates: [ 55.085995, 29.101835 ],
                    title: 'Козловщина',
                    discription: `деревня Козловщина, Сокоровское сельское общество`,
                    zoom: 13
                },
                {
                    coordinates: [ 55.096826, 29.096245 ],
                    title: 'дер.Заезвино',
                    discription: `деревня Заезвино, Сокоровское сельское общество.`,
                    zoom: 13
                },
                {
                    coordinates: [ 55.090822, 29.070453 ],
                    title: 'фоль.Заезвино',
                    discription: `Фольварок Заезвино, Гайковское сельское общество`,
                    zoom: 13
                },
                {
                    coordinates: [ 55.076748, 29.135333 ],
                    title: 'дер.Низголово',
                    discription: `деревня Низголово, Низголовское сельское общество.`,
                    zoom: 13
                },
                {
                    coordinates: [ 55.055323, 29.089636 ],
                    title: 'дер.Грабежево',
                    discription: `деревня Грабежево (Гребешова), Низголовское сельское общество.`,
                    zoom: 13
                },
                {
                    coordinates: [ 55.077712, 29.171426 ],
                    title: 'дер.Заручевье',
                    discription: `деревня Заручевье, Низголовское сельское общество.`,
                    zoom: 13
                },
                {
                    coordinates: [ 55.096625, 29.154781 ],
                    title: 'заст.Лазовица',
                    discription: `застенок Лазовица.`,
                    zoom: 13
                },
                {
                    coordinates: [ 55.0853934, 29.1284864 ],
                    title: 'хут.Воловица',
                    discription: `Хутор Воловица.<br>
По перепzoom: иси 1925-го, тут жил некий Каркоза Исак Никифорович с семьей.
`,
                    zoom: 13
                },
                {
                    coordinates: [ 55.060450, 29.045262 ],
                    title: 'дер.Падалица',
                    discription: `деревня Падалица, Антопольское и Сокоровское сельское общество.`,
                    zoom: 13
                },
                {
                    coordinates: [ 55.058479, 29.070324 ],
                    title: 'дер.Городец',
                    discription: `деревня Городец, Антопольское сельское общество. Сейчас - урочище.`,
                    zoom: 13
                },
                {
                    coordinates: [ 55.073418, 29.043867 ],
                    title: 'дер.Батуколово',
                    discription: `деревня Батуколово, Сушанское сельское общество.`,
                    zoom: 13
                },
                {
                    coordinates: [ 55.084461, 29.043846 ],
                    title: 'дер.Гайновщина',
                    discription: `деревня Гайновщина, Сушанское сельское общество.`,
                    zoom: 13
                },
                {
                    coordinates: [ 55.078345, 29.025541 ],
                    title: 'дер.Горовыя',
                    discription: `деревня Горовыя, Сушанское сельское общество.`,
                    zoom: 13
                },
                {
                    coordinates: [ 55.043155, 29.031689 ],
                    title: 'дер.Залесье',
                    discription: `деревня Залесье, Воропаевское сельское общество.`,
                    zoom: 13
                },
                {
                    coordinates: [ 55.042846, 29.087009 ],
                    title: 'дер.Ладеино',
                    discription: `деревня Ладеино (Ладеено), Воропаевское сельское общество.`,
                    zoom: 13
                },
                {
                    coordinates: [ 55.044589, 29.147420 ],
                    title: 'дер. Железки (Залески)',
                    discription: `деревня Железки (Залески), Низголовское сельское общество.`,
                    zoom: 13
                },
            ],
            photos: [
                {
                    coordinates: [ 55.070130, 29.123041 ],
                    preview: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/skakunovshchina%2Fpreview%2F2021-07-31%2012-06-26.jpg?alt=media&token=d1ab0912-60fa-424e-8fec-fbf470482898`,
                    original: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/skakunovshchina%2Forigin%2F2021-07-31%2012-06-26.jpg?alt=media&token=269cf493-8ac5-4c89-be93-22a9953481b2`,
                    title: `Дорога на Козловщину`
                },
                {
                    coordinates: [ 55.070177, 29.123179 ],
                    preview: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/skakunovshchina%2Fpreview%2F2021-07-31%2012-06-10.jpg?alt=media&token=8c3285e3-c44f-426a-8fe1-b050e24df4ba`,
                    original: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/skakunovshchina%2Forigin%2F2021-07-31%2012-06-10.jpg?alt=media&token=d1220a2f-6e47-4c84-bab8-476a2f9901e2`,
                    title: `Вид на яблоневый сад`

                },
                {
                    coordinates: [ 55.069349, 29.124398 ],
                    preview: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/skakunovshchina%2Fpreview%2F2021-07-31%2012-10-33.jpg?alt=media&token=580399fa-43ea-41c3-9dad-a57675679bae`,
                    original: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/skakunovshchina%2Forigin%2F2021-07-31%2012-10-33.jpg?alt=media&token=acbdcbb3-b3b0-4b3a-a804-2be33fad311e`,
                    title: `Вид на кладбище`

                },
                {
                    coordinates: [ 55.069462, 29.124304 ],
                    preview: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/skakunovshchina%2Fpreview%2F2021-07-31%2012-10-54.jpg?alt=media&token=d493bbef-e2c3-472b-8b1b-22488f4a47d3`,
                    original: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/skakunovshchina%2Forigin%2F2021-07-31%2012-10-54.jpg?alt=media&token=6b2762a7-77e3-4751-b6e2-455be49f6a51`,
                    title: `Дорога на Низголово`

                },
                {
                    coordinates: [ 55.069383, 29.124248 ],
                    preview: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/skakunovshchina%2Fpreview%2F2021-07-31%2012-11-29.jpg?alt=media&token=cf7fe5bf-9540-44bd-92dd-9cc2087438b8`,
                    original: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/skakunovshchina%2Forigin%2F2021-07-31%2012-11-29.jpg?alt=media&token=6a847a2d-3bf5-482d-aeb0-ccdffc81c2fb`,
                    title: `Вид на остановку`
                },
                {
                    coordinates: [ 55.069431, 29.124151 ],
                    preview: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/skakunovshchina%2Fpreview%2F2021-07-31%2012-13-07.jpg?alt=media&token=807bda11-ccb7-4caa-83c1-97efbeacf1d5`,
                    original: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/skakunovshchina%2Forigin%2F2021-07-31%2012-13-07.jpg?alt=media&token=f2424895-0b40-4bcf-a72b-9be4aea80691`,
                    title: `Дорога к Скакуновщине.`
                },
                {
                    coordinates: [ 55.067419, 29.117577 ],
                    preview: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/skakunovshchina%2Fpreview%2F2021-07-31%2012-17-18.jpg?alt=media&token=34789867-52fe-4c3d-85a2-ee06751b4375`,
                    original: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/skakunovshchina%2Forigin%2F2021-07-31%2012-17-18.jpg?alt=media&token=647a9dc8-5d7c-4f24-91f8-7d90518a8f0d`,
                    title: `Въезд в Скакуновщину.`
                },
                {
                    coordinates: [ 55.064829, 29.109147 ],
                    preview: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/skakunovshchina%2Fpreview%2F2021-07-31%2012-26-03.jpg?alt=media&token=3d5fad44-2602-4392-850e-9724da656f42`,
                    original: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/skakunovshchina%2Forigin%2F2021-07-31%2012-26-03.jpg?alt=media&token=a4433bca-c984-487a-9691-a692dab79c6a`,
                    title: `По Скакуновщине`
                },
                {
                    coordinates: [ 55.065251, 29.110665 ],
                    preview: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/skakunovshchina%2Fpreview%2F2021-07-31%2012-29-50.jpg?alt=media&token=9b10fbb3-9179-408d-a379-51deff68972c`,
                    original: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/skakunovshchina%2Forigin%2F2021-07-31%2012-29-50.jpg?alt=media&token=e6328cda-b398-4a0f-be8e-479eab35be8a`,
                    title: `По Скакуновщине`
                },
                {
                    coordinates: [ 55.065272, 29.110756 ],
                    preview: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/skakunovshchina%2Fpreview%2F2021-07-31%2012-29-58.jpg?alt=media&token=41e93e6f-b9a5-40d7-b457-5cf9e45e2894`,
                    original: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/skakunovshchina%2Forigin%2F2021-07-31%2012-29-58.jpg?alt=media&token=e6c00895-0dfa-431c-a86d-b917decadae6`,
                    title: `По Скакуновщине`
                },
                {
                    coordinates: [ 55.065397, 29.111134 ],
                    preview: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/skakunovshchina%2Fpreview%2F2021-07-31%2012-30-53.jpg?alt=media&token=f453e7b5-d325-4a72-a750-3142e4d3ecad`,
                    original: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/skakunovshchina%2Forigin%2F2021-07-31%2012-30-53.jpg?alt=media&token=869ff596-74ed-4e89-8528-4aa3f4c8a517`,
                    title: `По Скакуновщине`
                },
                {
                    coordinates: [ 55.065917, 29.112849 ],
                    preview: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/skakunovshchina%2Fpreview%2F2021-07-31%2012-32-06.jpg?alt=media&token=02eb80de-fc70-4b40-85e2-a13bb864036d`,
                    original: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/skakunovshchina%2Forigin%2F2021-07-31%2012-32-06.jpg?alt=media&token=2bfa6029-3c38-4345-8824-d2a109f757ee`,
                    title: `По Скакуновщине`
                },
                {
                    coordinates: [ 55.066035, 29.113711 ],
                    preview: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/skakunovshchina%2Fpreview%2F2021-07-31%2012-33-00.jpg?alt=media&token=c59d8bf5-6741-4f03-827f-d58198511260`,
                    original: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/skakunovshchina%2Forigin%2F2021-07-31%2012-33-00.jpg?alt=media&token=bddea8e6-8e7d-4b04-b44c-6b4f6e1d99e6`,
                    title: `Хаты...`
                },
                {
                    coordinates: [ 55.065389, 29.114176 ],
                    preview: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/skakunovshchina%2Fpreview%2F2021-07-31%2012-34-12.jpg?alt=media&token=d4428382-6ef2-443d-b35b-619224a2bcfd`,
                    original: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/skakunovshchina%2Forigin%2F2021-07-31%2012-34-12.jpg?alt=media&token=b9d1c150-6f74-4b04-ab88-ade444a16023`,
                    title: `Пасека`
                },
                {
                    coordinates: [ 55.064977, 29.114860 ],
                    preview: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/skakunovshchina%2Fpreview%2F2021-07-31%2012-35-21.jpg?alt=media&token=80d64f75-b0b0-4588-ad96-b6a102ee9156`,
                    original: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/skakunovshchina%2Forigin%2F2021-07-31%2012-35-21.jpg?alt=media&token=f28774e8-425f-47e3-b7db-80d5e50813a0`,
                    title: `Вид на озеро`
                },
                {
                    coordinates: [ 55.066190, 29.113754 ],
                    preview: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/skakunovshchina%2Fpreview%2F2021-07-31%2012-40-44.jpg?alt=media&token=697f5374-ba29-484c-9523-728844fd98df`,
                    original: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/skakunovshchina%2Forigin%2F2021-07-31%2012-40-44.jpg?alt=media&token=dbbcfc94-15de-4194-b311-13c9922974c7`,
                    title: `По Скакуновщине`
                },
                {
                    coordinates: [ 55.072753, 29.126037 ],
                    preview: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/skakunovshchina%2Fpreview%2Fphoto_2021-07-31_20-44-22.jpg?alt=media&token=863d5ee3-df5d-44ed-81d9-7ea8273d99cf`,
                    original: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/skakunovshchina%2Forigin%2Fphoto_2021-07-31_20-44-22.jpg?alt=media&token=bcc2b239-f881-444e-aa81-b6dcd41fe54e`,
                    title: `д. Низголово`
                },
                {
                    coordinates: [ 55.056609, 29.143068 ],
                    preview: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/skakunovshchina%2Fpreview%2Fphoto_2021-07-31_20-44-28.jpg?alt=media&token=a41b3223-d8a3-4f32-b89b-ec681b0794fa`,
                    original: `https://firebasestorage.googleapis.com/v0/b/shappo-d93a6.appspot.com/o/skakunovshchina%2Forigin%2Fphoto_2021-07-31_20-44-28.jpg?alt=media&token=8a1fe257-6bba-4e5a-8636-23dd4d887789`,
                    title: `д. Двор-Низголово`
                },
            ],
            churches: [
                { coordinates: [ 55.149446, 29.129038 ], title: 'Хотино', discription: `Церковь и Хотинский православный приход Святого Иосифа Обручника` },
                { coordinates: [ 55.076652, 29.135329 ], title: 'Низголово', discription: `Церковь и Низголовский православный приход Рождества Иоанна Предтечи` },
                { coordinates: [ 55.094297, 29.192221 ], title: 'Мартиново', discription: `Церковь и Мартиновский православный приход Покрова Пресвятой Богородицы` },
                { coordinates: [ 55.015039, 29.144244 ], title: 'Бочейково', discription: `Церковь и Бочейковский православный приход Преображения Господня` },
                { coordinates: [ 55.015960, 28.885517 ], title: 'Камень', discription: `Церковь и Каменский православный приход вмч. Георгия Победоносца` },
                { coordinates: [ 54.991584, 28.959726 ], title: 'Несино', discription: `Церковь и Несинский православный приход Вознесения Господня` },
                { coordinates: [ 55.041430, 28.950213 ], title: 'Губино', discription: `Церковь и Губинский православный приход святителя Николая` },
                { coordinates: [ 55.100315, 28.806090 ], title: 'Мосар', discription: `Церковь и Мосарский православный приход Благовещения Пресвятой Богородицы` },
            ],
        }
    },
};

ReactDOM.render(
    <BrowserRouter>
        <App config={configApp} />
    </BrowserRouter>
, wrapper);
