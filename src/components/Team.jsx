/**
 * Constant array containing details of the team members.
 * Each object within the array represents a team member with their respective profile details and social media links.
 * @const {Object[]} teamMembers - Array of objects, each containing a team member's information.
 * @property {number} id - Unique identifier for each team member.
 * @property {string} name - Full name of the team member.
 * @property {string} role - Job title or role of the team member within the company.
 * @property {string} image - URL to a profile image representing the team member.
 * @property {Object} socialLinks - Social media links associated with the team member.
 * @property {string} [socialLinks.twitter] - Optional Twitter URL.
 * @property {string} [socialLinks.facebook] - Optional Facebook URL.
 * @property {string} [socialLinks.google] - Optional Google URL.
 * @property {string} [socialLinks.instagram] - Optional Instagram URL.
 * @property {string} [socialLinks.dribbble] - Optional Dribbble URL.
 */
const teamMembers = [
  {
    id: 1,
    name: 'Ryan Thompson',
    role: 'Web Developer',
    image: 'https://randomuser.me/api/portraits/women/50.jpg',
    socialLinks: {
      twitter: 'https://twitter.com/',
      facebook: 'https://facebook.com/',
      dribbble: 'https://dribbble.com/',
    },
  },
  {
    id: 2,
    name: 'Romina Hadid',
    role: 'Marketing Specialist',
    image: 'https://randomuser.me/api/portraits/women/88.jpg',
    socialLinks: {
      google: 'https://google.com/',
      facebook: 'https://facebook.com/',
    },
  },
  {
    id: 3,
    name: 'Alexa Smith',
    role: 'UI/UX Designer',
    image: 'https://randomuser.me/api/portraits/women/28.jpg',
    socialLinks: {
      google: 'https://google.com/',
      twitter: 'https://twitter.com/',
      instagram: 'https://instagram.com/',
    },
  },
  {
    id: 4,
    name: 'Jenna Kardi',
    role: 'Founder and CEO',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    socialLinks: {
      dribbble: 'https://dribbble.com/',
      google: 'https://google.com/',
      twitter: 'https://twitter.com/',
      instagram: 'https://instagram.com/',
    },
  },
];

/**
 * Team component that introduces the team members.
 * This section is used to highlight the human element of the company by showcasing its team members.
 * @returns {React.Component} - A section that displays cards for each team member with their roles and social links.
 */
function Team() {
  return (
    <section className='pt-20 pb-48'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-wrap justify-center text-center mb-24'>
          <div className='w-full lg:w-6/12 px-4'>
            <h2 className='text-4xl font-semibold'>Here are our heroes</h2>
            <p className='text-lg leading-relaxed m-4 text-gray-600'>
              Meet our team of specialized marketers and business developers which will
              help you research new products and grow your business.
            </p>
          </div>
        </div>
        <div className='flex flex-wrap'>
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className='w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4'>
              <div className='px-6'>
                <img
                  alt={member.name}
                  src={member.image}
                  className='shadow-lg rounded-full max-w-full mx-auto'
                  style={{ maxWidth: '120px' }}
                />
                <div className='pt-6 text-center'>
                  <h5 className='text-xl font-bold'>{member.name}</h5>
                  <p className='mt-1 text-sm text-gray-500 uppercase font-semibold'>
                    {member.role}
                  </p>
                  <div className='mt-6'>
                    {member.socialLinks.twitter && (
                      <button
                        className='bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
                        onClick={() => window.open(member.socialLinks.twitter)}>
                        <i className='fab fa-twitter'></i>
                      </button>
                    )}
                    {member.socialLinks.facebook && (
                      <button
                        className='bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
                        onClick={() => window.open(member.socialLinks.facebook)}>
                        <i className='fab fa-facebook-f'></i>
                      </button>
                    )}
                    {member.socialLinks.instagram && (
                      <button
                        className='bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
                        onClick={() => window.open(member.socialLinks.instagram)}>
                        <i className='fab fa-instagram'></i>
                      </button>
                    )}
                    {member.socialLinks.dribbble && (
                      <button
                        className='bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
                        onClick={() => window.open(member.socialLinks.dribbble)}>
                        <i className='fab fa-dribbble'></i>
                      </button>
                    )}
                    {member.socialLinks.google && (
                      <button
                        className='bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
                        onClick={() => window.open(member.socialLinks.google)}>
                        <i className='fab fa-google'></i>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
