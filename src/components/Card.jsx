import { Button } from "./Button"
export const Card = ({
  img,
  title,
  content,
  text,
  width,
  height,
  fontSize,
  display,
  color,
  textFont,
  buttonDisplay,
  CardBody,
  margin,
  media500px,
}) => {
  console.log(img, title, content)

  return (
    <div className='card welcomeCard ' style={{ width, height, media500px }}>
      <div style={{ width: '100%', height: '100%', display }}>
        <img
          src={img}
          className='card-img-top'
          alt='...'
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      <div className='card-body  text-dark' style={{ display: CardBody }}>
        <h1 className='card-text' style={{ color, fontSize }}>
          {title}
        </h1>
        <p className='card-text' style={{ fontSize: textFont, margin }}>
          {text}
        </p>
      </div>
      <div style={{ display: buttonDisplay }}>
        <Button
          text='Place Your Order'
          backgroundColor={'black'}
          color={'white'}
          padding={'.5rem 3rem'}
          border={'none'}
          borderRadius={'1.5rem'}
        />
      </div>
    </div>
  )
}


