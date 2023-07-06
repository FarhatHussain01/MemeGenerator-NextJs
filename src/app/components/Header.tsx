import Image from "next/image"
import logoImg from "public/images/troll-face.png"
import Wrapper from "./Wrapper"

const Header = () => {
    return (
        <header className="">
            <Wrapper>
                <div className="flex items-center justify-between py-5 px-5 h-20 text-white bg-gradient-to-r from-purple-700 to-purple-900 ">
                    {/* image */}
                    <div className="flex items-center gap-x-2 ">
                        <Image src={logoImg} alt="heloo" width={60}/>
                        <h2 className="font-bold">MemeGenerator</h2>
                    </div>
                    {/* nav Section */}
                    <div className="flex font-semibold">
                        <h4>React Course - Project 3</h4>
                    </div>
                </div>
            </Wrapper>
        </header>
    )
}

export default Header