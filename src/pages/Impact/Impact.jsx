import { Link } from 'react-router-dom';
import ImpactCard from "../../components/Cards/ImpactCard";

function Impact() {
    return(
        <div>
            <ImpactCard
  				country="Democratic Republic of Congo"
  				title="Enhancing Nutrition"
  				description="Congo Peace Academy used an Acting Globally grant to 
				train more than 3,000 family farmers in sustainable agriculture 
				practices – boosting crop yields by 75 percent, strengthening food 
				security, and building trust across communities."
  				imageUrl="/dist/assets/ImpactPics/Congo.jpg"
			/>
			<ImpactCard
  				country="The Phillipines"
  				title="Healing Children"
  				description="An Acting Globally grant financed trauma-informed 
				therapy for Balik Kaanyag clinicians – bringing healing for child 
				survivors of sexual abuse and supporting caregivers in previously-unserved 
				communities."
  				imageUrl="/dist/assets/ImpactPics/Philippines.jpg"
			/>
			<ImpactCard
  				country="Uganda"
  				title="Supporting Survivors"
  				description="An Acting Globally grant allowed Islamic Women’s Initiative 
				for Justice, Law and peace to offer counseling and community education 
				reaching 200 survivors and women threatened by gender-based violence."
  				imageUrl="/dist/assets/ImpactPics/Uganda.jpeg"
			/>
			<ImpactCard
  				country="Iraq"
  				title="Rebuilding Communities"
  				description="Nadia’s Initiative applied an Acting Globally grant to 
				expand literacy and digital-skills training for 150 women and girls 
				at a Women’s Center in Sinjar – helping survivors of a 2014 genocide 
				targeting Yazidis rebuild their lives."
  				imageUrl="/dist/assets/ImpactPics/Iraq.jpeg"
			/>
			<ImpactCard
  				country="DRC and Rwanda"
  				title="Accessing Education"
  				description="Partnering with Congo Peace Academy, Acting Globally mobilized 
				volunteers who coached students applying to international 
				universities – opening opportunities for young people committed to 
				using their education to drive change in their countries."
  				imageUrl="/dist/assets/ImpactPics/Rwanda.jpg"
			/>
			<ImpactCard
  				country="Cambodia"
  				title="Preparing Young Leaders"
  				description="Journeys Within Our Community used an Acting Globally grant 
				to upgrade computers and other tools in its education center – 
				strengthening language skills and offering training for hundreds 
				of young people pursuing careers."
  				imageUrl="/dist/assets/ImpactPics/Cambodia.jpg"
			/>
			<ImpactCard
  				country="India"
  				title="Strengthening Skills Training"
  				description="Acting Globally is crafting a grant for Ek Tara to 
				incorporate AI and digital awareness into the education and training 
				it provides to more than 1,000 marginalized children through its Learning 
				Centre in Kolkata."
  				imageUrl="/dist/assets/ImpactPics/India.jpg"
			/>
			<ImpactCard
  				country="Cameroon"
  				title="Advancing Climate Justice"
  				description="Acting Globally volunteers are supporting Association des 
				Acteurs de Développement (ADEV) in preparing a strategic plan to engage 
				young people in initiatives that advance climate justice."
  				imageUrl="/dist/assets/ImpactPics/Cameroon.JPG"
			/>
      </div>
    );
}

export default Impact;