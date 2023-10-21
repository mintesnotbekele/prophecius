import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import ProjectsGrid from "@components/ProjectsGrid";
import CallToActionSection from "@components/sections/CallToAction";

import { getSortedProjectsData } from "@library/projects";

const Projects2 = (props) => {
  return (
    <Layouts>
      <PageBanner pageTitle={"Prophecius Technologies... <br> Better <span className=\"mil-thin\">Your Partner in Digital Transformation</span>"} breadTitle={"Portfolio"} anchorLabel={"Our works"} anchorLink={"#portfolio"} />

      <ProjectsGrid projects={props.projects} />
      
      <CallToActionSection />
      
    </Layouts>
  );
};
export default Projects2;

export async function getStaticProps() {
  const allProjects = getSortedProjectsData();

  return {
    props: {
      projects: allProjects
    }
  }
}