export default function Footer() {
    return (

        <footer>
            {/* DEKSTOP */}
            <div className="lg:block hidden">
                <div className="footer justify-between px-[200px] p-10">
                    <aside className="items-center">
                        <p>©Line Plus Corporation   |   Privacy Policy  |   Line Partners  |   Contacts |   Security & Privacy   </p>
                    </aside>
                    <select className="select items-center border rounded-full">
                        <option className="font-sans">Family Sites</option>
                        <option className="font-sans">Line Store</option>
                        <option className="font-sans">Line News</option>
                    </select>
                </div>
            </div>
            {/* DEKSTOP */}
            {/* MOBILE */}
            <div className="lg:hidden block">
                <div className="flex flex-col items-center pb-10 text-xs">
                    <aside className="flex flex-row gap-7 items-center ">
                        <p>Privacy Policy</p>
                        <p>Line Partners</p>
                        <p>Contacts</p>
                        <p>Security & Privacy</p>
                    </aside>
                    <aside className="items-center">
                        <p>©️LINE Plus Corporation</p>
                    </aside>
                
                </div>
            </div>
            {/* MOBILE */}
        </footer>

    )
}