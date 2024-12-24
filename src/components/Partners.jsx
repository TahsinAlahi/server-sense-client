import img1 from '../assets/profile-img-1.png'
import img2 from '../assets/profile-img-2.png'
import img3 from '../assets/profile-img-3.png'

function Partners() {
 const teamMembers = [
  {
    name: "Alice Johnson",
    role: "Project Manager",
    contribution: "Oversaw project coordination",
    image: img1
  },
  {
    name: "James Lee",
    role: "Backend Developer",
    contribution: "Built the server and APIs",
    image: img2
  },
  {
    name: "Sarah Brown",
    role: "UI/UX Designer",
    contribution: "Created user-friendly designs",
    image: img3
  },
];


  return (
    <section className="bg-gray-100 py-8 px-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-black font-lora">Meet Our Partners</h1>
      </div>
      <div className="flex flex-wrap justify-center gap-8 font-poppins">
        {teamMembers.map((member) => (
          <div key={member.name} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-32 h-32 bg-black rounded-full overflow-hidden mx-auto mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-semibold text-black font-lora">{member.name}</h3>
              <p className="text-sm text-gray-600 uppercase tracking-wide mb-4">
                {member.role}
              </p>
              <div className="text-center bg-purple-200 p-4 rounded-md text-black">
                {member.contribution}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
