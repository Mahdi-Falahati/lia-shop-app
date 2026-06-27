const ringSizes = [
    { size: 5, mm: "۱۵ میلی‌متر" },
    { size: 6, mm: "۱۶ میلی‌متر" },
    { size: 7, mm: "۱۷ میلی‌متر" },
    { size: 8, mm: "۱۸ میلی‌متر" },
    { size: 9, mm: "۱۹ میلی‌متر" },
    { size: 10, mm: "۲۰ میلی‌متر" },
];

const RingSizeGuide = () => {
    return (
        <div>
            <h3 className="text-lg font-bold text-center text-gray-700 block my-6">راهنمای انتخاب سایز انگشتر</h3>
            <div className="flex flex-col items-center justify-center py-10 px-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-end justify-between w-full max-w-2xl gap-2">
                    {ringSizes.map((item, index) => (
                        <div key={item.size} className="flex flex-col items-center gap-4">
                            <div className="relative w-12 h-12 md:w-16 md:h-16 border-2 border-[#d4b483] rounded-full flex items-center justify-center">
                                <span className="text-[#8e7a5c] font-bold text-sm md:text-base">{item.size}</span>
                                <div className="absolute -top-3 w-4 h-4 bg-[#d4b483] rotate-45"></div>
                            </div>

                            <div className="flex flex-col items-center w-full">
                                <div className="w-full h-[1px] bg-gray-300 relative">
                                    <div className="absolute left-0 -top-1 w-[1px] h-3 bg-gray-300"></div>
                                    <div className="absolute right-0 -top-1 w-[1px] h-3 bg-gray-300"></div>
                                </div>
                                <span className="text-[10px] md:text-xs text-gray-500 mt-2 whitespace-nowrap">{item.mm}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RingSizeGuide;
