const Banner = () => {
    return (
        <div className="relative w-full h-screen">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url(https://i.ibb.co/d4x9pLd/tim-foster-n-Cy-Hu-Wc-Xm-E-unsplash.jpg)",
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-[#151515] to-transparent mix-blend-darken"></div>
            </div>

            <div className="relative z-10 flex items-center h-full text-white max-w-7xl mx-auto p-4 ">
                <div className="max-w-xl">
                    <h1 className="mb-5 text-6xl font-bold ">Your Journey Begins with the Right Car</h1>
                    <p className="mb-5 text-lg font-bold">
                    Discover a wide range of high-quality vehicles tailored to your needs. At AutoLynx, we help you start your journey with the perfect car
                    </p>
                    
                </div>
            </div>
        </div>
    );
};

export default Banner;
