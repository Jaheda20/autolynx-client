const Banner = () => {
    return (
        <div className="relative w-full h-screen">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url(https://i.ibb.co/HPP92mP/photo-1530648006762-8d9578c273c4-q-80-w-1486-auto-format-fit-crop-ixlib-rb-4-0.jpg)",
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-[#151515] to-transparent mix-blend-darken"></div>
            </div>

            <div className="relative z-10 flex items-center h-full text-white max-w-7xl mx-auto">
                <div className="max-w-xl">
                    <h1 className="mb-5 text-5xl md:text-6xl font-bold">Your Journey Begins with the Right Car</h1>
                    <p className="mb-5 text-lg">
                    Discover a wide range of high-quality vehicles tailored to your needs. At AutoLynx, we help you start your journey with the perfect car.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
