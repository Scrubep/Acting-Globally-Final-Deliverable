import { Link } from 'react-router-dom';
import PartnerCard from '../../components/Cards/PartnerCard';
import Button from '../../components/Button/Button';

function Partners() {
    return(
        <div className='partners-body'>
          <PartnerCard
            country="Democratic Republic of Congo"
            orgName="Congo Peace Academy"
            tagline="Fostering Peace-building"
            description="Based in Goma in the Democratic Republic of Congo,
            Congo Peace Academy (CPA) is devoted to building a thriving, 
            more peaceful future for the DRC. Founded in 2020, CPA empowers 
            communities to overcome challenges and transform their lives through 
            education and training, capacity building, entrepreneurship, and 
            humanitarian assistance. Their signature programs include Path to 
            the Future, which prepares young people to apply to international 
            universities; and Agri Peace, combining training in conservation 
            agriculture with intentional peacebuilding."
            imageUrl="../dist/assets/PartnerPics/Congo.png"
          />
          <PartnerCard
            country="Iraq"
            orgName="Nadia’s Initiative"
            tagline="Empowering Survivors"
            description="Founded by Nobel Peace Prize winner Nadia Murad, 
            Nadia’s Initiative is a survivor-led organization that advocates 
            to end the use of sexual violence as a weapon of war and ensure 
            survivors hold real power in shaping justice and recovery. Rooted 
            in a decade of work rebuilding Sinjar in Northern Iraq, NI translates 
            lived experience into systems change – serving as a platform for 
            survivor-led change and building the evidence, standards, and 
            institutional will to and reshape global policy."
            imageUrl="../dist/assets/PartnerPics/Iraq.png"
          />
          <PartnerCard
            country="Uganda"
            orgName="The Islamic Women’s Initiative for Justice, Law and Peace"
            tagline="Securing Women’s Rights"
            description="The Islamic Women’s Initiative for Justice, Law and 
            Peace (IWILAP) is the longest standing Muslim women-led nonprofit 
            organization in Uganda – dedicated to promoting human rights, 
            including sexual and reproductive rights, gender equity and women’s 
            religious freedom. IWILAP’s programs encompass legal advocacy and 
            representation; skills-training to empower women economically; 
            health services, counseling and psychological support for women 
            affected by gender-based violence; and sexual and reproductive 
            health rights training."
            imageUrl="../dist/assets/PartnerPics/Uganda.jpeg"
          />
          <PartnerCard
            country="The Philippines"
            orgName="Balik Kaanyag"
            tagline="Protecting Children"
            description="Located in the Philippines, Balik Kaanyag (BK) 
            is dedicated to bringing healing and empowering children 
            survivors of sexual abuse, and helping families and caregivers 
            provide a safe, nurturing environment for children under their care. 
            BK collaborates with schools, churches and other NGOs to deliver 
            holistic care for children. Their services include individual trauma-informed 
            therapy; group therapy sessions embodying empowering play and 
            therapeutic arts activities; training for caregivers; and child 
            protection sessions to help prevent abuse."
            imageUrl="../dist/assets/PartnerPics/Philippines.png"
          />
          <PartnerCard
            country="India"
            orgName="Ek Tara"
            tagline="Educating and Training Youth"
            description="Based in Kolkata, India, Ek Tara empowers girls and
             women from marginalized urban communities through holistic 
             education and skills-development. Founded in 2011, the organization 
             aims to break the cycle of poverty and foster long-term community 
             engagement for women and girls. Ek Tara’s flagship Learning Centre 
             serves more than 1,000 children with tailored academic offerings and 
             co-curricular support from the earliest years through high school. 
             The Centre’s programs feature digital learning tools, a STEAM 
             laboratory, and facilities for music and arts."
            imageUrl="../dist/assets/PartnerPics/India.jpg"
          />
          <PartnerCard
            country="Cambodia"
            orgName="Journeys Within Our Community"
            tagline="Opening Pathways to Careers"
            description="Since its founding in 2005 in Siem Reap, 
            Cambodia, Journeys Within Our Community (JWOC) has 
            transformed the future for low-income youth through 
            education, career guidance, digital and English literacy 
            training, and community engagement. Their model helps 
            young people thrive, while reducing economic inequality 
            in the community. JWOC offers a Better Futures Program, 
            which equips high school students and recent graduates 
            with supplementary education and project-based workshops 
            supporting communities. The organization also provides 
            scholarships for young people to attend a local university."
            imageUrl="../dist/assets/PartnerPics/Cambodia.JPG"
          />
          <PartnerCard
            country="Cameroon"
            orgName="Association des Acteurs de Développement (ADEV)"
            tagline="Promoting Climate Justice"
            description="Based in Cameroon, Association des Acteurs de 
            Développement (ADEV) promotes sustainable development through 
            inclusive education, environmental protection, and gender 
            equality. ADEV’s work fosters civic participation and transforms 
            community potential into lasting social impact. Since 2009 
            ADEV has empowered youth and women through initiatives that 
            support youth participation in debates on pressing social 
            issues and climate-action projects, while fostering entrepreneurial 
            and leadership skills, and advocacy for gender inclusion."
            imageUrl="../dist/assets/PartnerPics/Cameroon.jpg"
          />
          <PartnerCard
            country="Ethiopia"
            orgName="CIFA Ethiopia"
            tagline="Fostering Resilient Communities"
            description="Founded in 2005, Communities Initiatives Facilitations 
            and Assistance (CIFA-Ethiopia) works to build peaceful, 
            healthy and self-reliant communities in Southern Ethiopia. CIFA enables 
            local participation in projects that advance environmentally friendly 
            development, strengthen education and promote health and nutrition. 
            Their “People First” holistic approach to development empowers women, 
            while fostering peacebuilding and social cohesion in a region that has 
            experienced violence in the past."
            imageUrl="../dist/assets/PartnerPics/Ethiopia.jpeg"
          />
          <PartnerCard
            country="Guinea"
            orgName="SunRoots Guinea"
            tagline="Harnessing Solar Power"
            description="SunRoots Guinea is an NGO working to apply solar energy 
            to address pressing local needs. The organization’s initial project 
            will pilot a solar-powered irrigation system in Dubréka, to support 
            year-round cultivation of crops on a one-hectare plot of land. The 
            group is supported by SunRoots Energy – a U.S.-based nonprofit dedicated 
            to breaking the cycle of poverty in Africa by delivering clean, reliable 
            energy solutions to expand access to healthcare, education and safe, 
            thriving communities."
            imageUrl="../dist/assets/PartnerPics/Guinea.jpeg"
          />
          <PartnerCard
            country="Nepal"
            orgName="We for Change"
            tagline="Empowering Youth-led Change"
            description="We for Change is a youth-led organization in Nepal 
            dedicated to fostering a future where every young person in the 
            country enjoys equal opportunities for a sustainable future. 
            Through training and community-service projects, We for Change 
            engages and empowers youth to take leadership roles in promoting 
            health and wellbeing, climate adaptation and mitigation, sustainable 
            urban planning, and access to education throughout Nepal."
            imageUrl="../dist/assets/PartnerPics/Nepal.jpg"
          />
        </div>
    );
}

export default Partners;