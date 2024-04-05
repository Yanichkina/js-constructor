import image from './assets/image.jpg'
import {TitleBlock, TextBlock, ColumnsBlock, ImageBlock} from './classes/blocks.js' 

const text = `Связаться со мной ты можешь тут: <a href="https://t.me/gina_it">Gina It</a>`

export const model = [

    new TitleBlock (
        'Web-site builder in JavaScript',
        {
            tag: 'h2',
            // styles: `background: linear-gradient(to right, #ff0099, #493240);
            // color: #fff; text-align: center; padding: 1.5rem;`
            styles: {
                background: 'linear-gradient(to right, #d801b9, #493240)',
                color: '#fff',
                'text-align': 'center',
                padding: '1.5rem',
                
                
            }
        }),


    new ImageBlock (
        image,
        {
            styles: {
                padding: '2rem 0',
                display: 'flex',
                'justify-content': 'center'
              },
            
            imageStyles: {
                width: '500px',
                height: 'auto'
                },
            alt: 'Portfolio_banner'
        }

    ),
    

    new ColumnsBlock (

        [
            'Это приложение было создано на чистом JavaScript, без использования сторонних библиотек',
            'В приложении продемонстрирована моя работа с ООП и SOLID и npm',
            'Это мое первое приложение для портфолио, информацию находила самостоятельно'
        ],
        {
            styles: {
                background: 'linear-gradient(to bottom, #c803a3, #56398d)',
                padding: '2rem',
                color: '#fff',
                'font-weight': 'bold'
              }
        }

    ),

    new TextBlock (
        text,
        {
            styles: {
                background: 'linear-gradient(to left, #bb2b06, #f8f866)',
                padding: '1rem',
                'font-weight': 'bold'
              }
        }
    )

]