


const Recomended = () => {
  const recommendedClasses = [
    { name: 'HIIT', schedule: 'Mondays at 7:00 AM', instructor: 'Jane Smith' },
    { name: 'Pilates', schedule: 'Wednesdays at 6:00 PM', instructor: 'Emily Davis' },
    { name: 'Spin Class', schedule: 'Fridays at 5:30 PM', instructor: 'Michael Johnson' },
];

return (
    <div className="min-h-[89.5vh]  flex flex-col items-center">
      
        <main className="flex-1 w-full max-w-4xl p-6">
            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Our Top Picks for You</h2>
                <ul className="bg-gray-900 shadow rounded-lg p-4">
                    {recommendedClasses.map((recClass, index) => (
                        <li key={index} className="flex justify-between py-4 border-b last:border-none">
                            <div>
                                <h3 className="text-lg text-white font-bold">{recClass.name}</h3>
                                <p className="text-white">{recClass.schedule}</p>
                            </div>
                            <div className="text-right text-white">
                                <p className="font-semibold text-white">{recClass.instructor}</p>
                                <p className=" text-white">Instructor</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </main>
        
    </div>
);

}

export default Recomended;