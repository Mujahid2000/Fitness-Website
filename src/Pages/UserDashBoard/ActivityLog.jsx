import React from 'react';

const ActivityLog = () => {
    // Mock data for demonstration purposes
    const activities = [
        { date: '2024-06-15', activity: 'Cardio Workout', duration: '1 hour' },
        { date: '2024-06-14', activity: 'Strength Training', duration: '1.5 hours' },
        { date: '2024-06-13', activity: 'Yoga', duration: '1 hour' },
    ];

    const trainingTimes = [
        { date: '2024-06-16', time: '10:00 AM - 11:00 AM' },
        { date: '2024-06-17', time: '2:00 PM - 3:30 PM' },
    ];

    const trainerProfile = {
        name: 'John Doe',
        bio: 'Certified Personal Trainer with 10 years of experience in strength training and nutrition.',
        imageUrl: 'https://via.placeholder.com/150'
    };

    return (
        <div className="min-h-[89.5vh] flex flex-col items-center">
            
            <main className="flex-1 w-full max-w-4xl p-6">
                <section className="mb-8">
                    <h2 className="text-xl text-white font-semibold mb-4">Recent Activities</h2>
                    <ul className="bg-white shadow rounded-lg p-4">
                        {activities.map((activity, index) => (
                            <li key={index} className="flex justify-between py-2 border-b last:border-none">
                                <span>{activity.date}</span>
                                <span>{activity.activity}</span>
                                <span>{activity.duration}</span>
                            </li>
                        ))}
                    </ul>
                </section>
                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-4">Upcoming Training Times</h2>
                    <ul className="bg-white shadow rounded-lg p-4">
                        {trainingTimes.map((time, index) => (
                            <li key={index} className="flex justify-between py-2 border-b last:border-none">
                                <span>{time.date}</span>
                                <span>{time.time}</span>
                            </li>
                        ))}
                    </ul>
                </section>
                <section>
                    <h2 className="text-xl font-semibold mb-4">Trainer Profile</h2>
                    <div className="bg-white shadow rounded-lg p-4 flex items-center">
                        <img src='https://i.ibb.co/mFGCYnK/mens1.jpg' alt="Trainer" className="w-24 h-24 rounded-full mr-4"/>
                        <div>
                            <h3 className="text-lg font-bold">{trainerProfile.name}</h3>
                            <p>{trainerProfile.bio}</p>
                        </div>
                    </div>
                </section>
            </main>
           
        </div>
    );
};

export default ActivityLog;
