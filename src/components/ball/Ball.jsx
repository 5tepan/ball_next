import {useEffect, useRef, useState} from 'react'
import { gsap } from 'gsap'
import * as PIXI from 'pixi.js'
import {useDispatch} from "react-redux"
import {saveRandomTodos} from "@/store/reducers/todoSlice"
import {getRandomTodos} from "@/utils/getRandomTodos"

const Ball = ({todos}) => {
    const ballRef = useRef(null)
    const dispatch = useDispatch()
    const [isJumping, setIsJumping] = useState(false)

    const ballPosition = {
        x: 0,
        y: 0,
        imageIndex: 0
    }

    const ballImages = [
        '/images/beachBall.png',
        '/images/footballBall.png',
        '/images/basketballBall.png',
        '/images/volleyballBall.png',
        '/images/tennisBall.png',
        '/images/golfBall.png',
        '/images/bowlingBall.png'
    ]

    useEffect(() => {
        const app = new PIXI.Application({
            width: 600,
            height: 400,
            backgroundColor: 0xDEEDFF
        })
        ballRef.current.appendChild(app.view)

        const platform = new PIXI.Graphics()
        platform.drawRect(0, 0, app.renderer.width, 20)
        platform.endFill()
        platform.x = 0
        platform.y = app.renderer.height - 10
        app.stage.addChild(platform)

        const textureGrass = PIXI.Texture.from('/images/grass.png')
        const grassSprite = new PIXI.Sprite(textureGrass)
        grassSprite.width = app.renderer.width
        grassSprite.height = 10
        platform.addChild(grassSprite)

        const textureBall = PIXI.Texture.from(ballImages[0])
        const ball = new PIXI.Sprite(textureBall)
        ball.width = 100
        ball.height = 100
        ball.x = app.renderer.width / 2 - ball.width / 2
        ball.y = app.renderer.height - ball.height
        ball.eventMode = 'dynamic'
        ball.buttonMode = true
        ball.on('click', handleBallClick)
        app.stage.addChild(ball)

        function handleBallClick() {
            if (!isJumping) {
                setIsJumping(true)
                gsap.to(ball, {
                    y: app.renderer.height / 2,
                    duration: 1,
                    ease: 'power2.out',
                    onComplete: () => {
                        gsap.to(ball, {
                            y: app.renderer.height - ball.height,
                            duration: 1,
                            ease: 'power2.in',
                            onComplete: () => {
                                setIsJumping(false)
                                const nextImage = (ballPosition.imageIndex + 1) % ballImages.length
                                ball.texture = PIXI.Texture.from(ballImages[nextImage])
                                ballPosition.imageIndex = nextImage
                            }
                        })
                    }
                })
            }
        }
    }, [])

    useEffect(() => {
        if (!isJumping) {
            const randomTodos = getRandomTodos(todos, 10)
            dispatch(saveRandomTodos(randomTodos))
        }
    }, [isJumping])

    return (
        <div ref={ballRef}/>
    )
}

export default Ball
