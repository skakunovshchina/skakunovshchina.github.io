import { default as React } from 'react';
import {YMaps, Map, Placemark, Circle, MapType} from "react-yandex-maps";

const defaultMapState = {
    center: [54.253994, 29.404666],
    zoom: 16,
    type: 'yandex#hybrid' as MapType
};
const fillColor = '#ff000c';// Цвет заливки.
const strokeColor = '#fff';// Цвет обводки.
const opacity = 0.2;// Общая прозрачность (как для заливки, так и для обводки).
const strokeWidth = 1;// Ширина линии.
const strokeStyle = 'shortdash';// Стиль обводки.

function MapPage({config}: any) {
    const {photos, objectsArr, hatyArr, churches} = config;
    const allObjects: any = [...objectsArr, ...photos, ...hatyArr];
    const [mapSize, setMapSize] = React.useState<any>({});
    const [mapState, setMapState] = React.useState<any>(defaultMapState);
    const [currentselctedObject, setCurrentselctedObject] = React.useState<number>(0);

    const popstateHandler = () => {
        const { hash } = window.location;
        const currentIndex = +hash.slice(1) || 0;
        console.log('currentIndex', currentIndex);
        setTimeout(() => setCurrentselctedObject(currentIndex), 100);
        let zoom = 15;
        if (currentIndex > objectsArr.length && currentIndex <= (objectsArr.length + photos.length)) {
            zoom = 19;
        }
        const currntObject = allObjects[currentIndex];
        setTimeout(() => setMapState({
            center: currntObject.coordinates,
            zoom,
            type: 'yandex#hybrid' as MapType
        }), 100);
        console.log('zoom:popstateHandler:', zoom);
    };

    const zoomChangeHandler = (e: any) => {
        console.log('newZoom, oldZoom', e.get("zoom"), e.get("newZoom"), e.get("oldZoom"), e);
        // setTimeout(() => setMapState({...mapState, ...{zoom: e.originalEvent.target._zoom}}));
        // setMapState({...mapState, ...{zoom: e.get("newZoom")}});

    };

    React.useEffect(() => {

        const block: any = document.querySelector('.main-data-block');
        const masthead: any = document.querySelector('#masthead');
        const {height: mastheadHeight} = masthead.getBoundingClientRect();
        setMapSize({
            width: block.offsetWidth,
            height: block.offsetWidth > 500 ? window.outerHeight - mastheadHeight - 30 - 31 - 60 : window.outerHeight - mastheadHeight
        });

        window.addEventListener('popstate', popstateHandler);
        popstateHandler();
        return () => window.removeEventListener('popstate', popstateHandler);
    }, []);

    return (
        <div id="content" className="site-content">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">

                        <main className="main-data-block">
                            <ul id="photo-navigation-menu">
                                {
                                    photos.map(({preview, title}: any, index: number) =>
                                        <li key={index}>
                                            <a href={ '#' + (index + objectsArr.length)}>
                                                <img className="img-navigation-item" src={preview} title={title + ' ' + index} />
                                            </a>
                                        </li>
                                    )
                                }
                            </ul>
                            <YMaps query={{ lang: "ru_RU", load: "package.full" }}>
                                <Map
/*
                                    instanceRef={(ref: any) => {
                                        console.log('MapPage.tsx:483::', ref);
                                        return ref && ref.events.add('onzoom', zoomChangeHandler);
                                    }}
*/
                                    // instanceRef={ref => this._mapElement = ref}
                                    // onClick={() => console.log('MapPage:onClick')}
                                    // onZoom={() => console.log('MapPage:onZoom')}
                                    onWheel={zoomChangeHandler}
                                    // onBoundsChange={zoomChangeHandler}
                                    defaultState={defaultMapState}
                                    state={mapState}
                                    width={mapSize.width}
                                    height={mapSize.height}>
                                    {
                                        objectsArr.map(({coordinates, title, discription}: any, ind: number) => <Circle
                                            key={ind}
                                            geometry={...[coordinates, ind === 0 ? 0 : 3]}
                                            options={{
                                                fillColor,
                                                strokeColor,
                                                strokeWidth,
                                            }}
                                            properties={{
                                                hintContent: `${title} ${ind}`,
                                                balloonContent: discription,
                                            }}
                                            instanceRef={(ref: any) => {
                                                const {discription} = allObjects[currentselctedObject];
                                                if (ref && ind === currentselctedObject && discription) {
                                                    ref.balloon.open();
                                                } else if (ref) {
                                                    ref.balloon.close();
                                                }
                                            }}

                                        />)
                                    }
                                    {
                                        photos.map(({coordinates, preview, original, title}: any, ind: number) => <Circle
                                            key={ind}
                                            geometry={...[coordinates, 0.5]}
                                            options={{
                                                fillColor,
                                                strokeColor,
                                                strokeWidth,
                                            }}
                                            properties={{
                                                hintContent: `${title} ${objectsArr.length + ind}`,
                                                balloonContent: `<a href="${original}" target="_blank"><div>${title}</div><img width="100" height="75" src="${preview}"></a>`,
                                            }}
                                            instanceRef={(ref: any) => {
                                                if (ref && (objectsArr.length + ind) === currentselctedObject) {
                                                    ref.balloon.open();
                                                } else if (ref) {
                                                    ref.balloon.close();
                                                }
                                            }}
                                        />)
                                    }
                                    {
                                        hatyArr.map(({coordinates, title, discription}: any, ind: number) => <Circle
                                            key={ind}
                                            geometry={...[coordinates, 2]}
                                            options={{
                                                fillColor: '#ffffff',
                                                strokeColor: '#c7c7c7',
                                                strokeWidth,
                                            }}
                                            properties={{
                                                hintContent: `${title} ${objectsArr.length + photos.length + ind}`,
                                                balloonContent: title,
                                            }}
                                        />)
                                    }
                                    {
                                        churches.map(({coordinates, title, discription}: any) => <Placemark
                                            geometry={coordinates}
                                            properties={{
                                                iconCaption: title,
                                                balloonContent: discription,
                                            }}
                                            options={{
                                                preset: 'islands#glyphCircleIcon',
                                                iconColor: '#ff0e1a'
                                            }}
                                        />)
                                    }
                                </Map>
                            </YMaps>
                            <div>
                                <div>
                                    <ul id="list-of-house">
                                        {
                                            objectsArr.map(({title}: any, index: number) =>
                                                <li key={index}>
                                                    <a className="continue-reading" href={'#' + index}>{title}</a>
                                                </li>
                                            )
                                        }
                                    </ul>
                                </div>
                            </div>

                        </main>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default MapPage;