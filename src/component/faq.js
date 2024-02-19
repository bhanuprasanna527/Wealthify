function Faq () {
    return (
        <div className="my-4 py-20 px-4">
            <div className="mx-auto max-w-4xl">
                <h2 className="text-4xl text-center pb-12 font-bold text-black sm:text-5xl">FAQ</h2>
            </div>

            <div className="mx-auto max-w-4xl bg-[#F7F7F7] rounded-3xl m-4">
                <div className="">
                    <div className="flex justify-between items-center px-6 py-4 cursor-pointer"
                         onClick={() => toggleAnswer('faq1')}>
                        <h3 className="text-lg font-semibold">What is CapiSpark?</h3>
                        <svg className="w-6 h-6 transform transition-transform" id="arrow-faq1" viewBox="0 0 24 24"
                             fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 15L12 8L19 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                  stroke-linejoin="round"></path>
                        </svg>
                    </div>
                    <div id="faq1" className="px-10 pb-4 hidden">
                        <p className="text-gray-600">CapiSpark is an innovative robo advisor platform designed
                            exclusively for
                            mobile devices. It offers automated investment solutions tailored to your financial goals
                            and
                            risk tolerance, all accessible from the convenience of your smartphone or tablet.</p>
                    </div>
                </div>

                <div className="">
                    <div className="flex justify-between items-center px-6 py-4 cursor-pointer"
                         onClick={() => toggleAnswer('faq2')}>
                        <h3 className="text-lg font-semibold">How does CapiSpark work?</h3>
                        <svg className="w-6 h-6 transform transition-transform" id="arrow-faq2" viewBox="0 0 24 24"
                             fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 15L12 8L19 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                  stroke-linejoin="round"></path>
                        </svg>
                    </div>
                    <div id="faq2" className="px-10 pb-4 hidden">
                        <p className="text-gray-600">CapiSpark works by first assessing your financial situation,
                            investment
                            goals, and risk tolerance. Based on this information, our platform recommends a personalized
                            investment plan comprised of diversified portfolios of low-cost exchange-traded funds (ETFs)
                            or
                            other investment products. You can set up and manage your investment plan directly from your
                            mobile device, making investing easy and convenient.</p>
                    </div>
                </div>

                <div className="">
                    <div className="flex justify-between items-center px-6 py-4 cursor-pointer"
                         onClick={() => toggleAnswer('faq3')}>
                        <h3 className="text-lg font-semibold">Is CapiSpark suitable for me?</h3>
                        <svg className="w-6 h-6 transform transition-transform" id="arrow-faq3" viewBox="0 0 24 24"
                             fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 15L12 8L19 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                  stroke-linejoin="round"></path>
                        </svg>
                    </div>
                    <div id="faq3" className="px-10 pb-4 hidden">
                        <p className="text-gray-600">CapiSpark is suitable for anyone looking for a convenient and
                            user-friendly
                            way to invest. Whether you're a beginner investor or have more experience, CapiSpark
                            provides a
                            seamless investing experience tailored to your needs. With intuitive navigation, CapiSpark
                            makes
                            investing accessible anytime, anywhere.</p>
                    </div>
                </div>

                <div className="">
                    <div className="flex justify-between items-center px-6 py-4 cursor-pointer"
                         onClick={() => toggleAnswer('faq4')}>
                        <h3 className="text-lg font-semibold">What are the fees associated with CapiSpark?</h3>
                        <svg className="w-6 h-6 transform transition-transform" id="arrow-faq4" viewBox="0 0 24 24"
                             fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 15L12 8L19 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                  stroke-linejoin="round"></path>
                        </svg>
                    </div>
                    <div id="faq4" className="px-10 pb-4 hidden">
                        <p className="text-gray-600">CapiSpark offers transparent and competitive pricing with low fees.
                            Our fee
                            structure typically includes an annual management fee based on a percentage of your assets
                            under
                            management. Additionally, there may be underlying fund expenses associated with the
                            investment
                            products in your portfolio. We strive to keep our fees as low as possible to maximize the
                            value
                            for our users.</p>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

function toggleAnswer(id) {
    const answer = document.getElementById(id);
    const arrow = document.getElementById('arrow-' + id);
    if (answer.classList.contains('hidden')) {
        answer.classList.remove('hidden');
        arrow.classList.add('rotate-180');
    } else {
        answer.classList.add('hidden');
        arrow.classList.remove('rotate-180');
    }
}

export default Faq;