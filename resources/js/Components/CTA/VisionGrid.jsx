import { Container } from '../Container';
import { FadeIn } from '../FadeIn';
import { GridList, GridListItem } from '../GridList';

export function VisionGrid() {
   return (
      <>
         <div className="mt-24 sm:mt-32 lg:mt-40">
            <div className="mx-auto mt-16 max-w-7xl px-6 lg:px-8">
               <FadeIn>
                  <img
                     src="https://res.cloudinary.com/jessebubble/image/upload/v1718598570/devsa-readme-github_udnxkm.svg"
                     alt="DEVSA Street Art logo"
                     className="h-auto w-full"
                  />
               </FadeIn>
               <Container className="mt-16">
                  <GridList>
                     <GridListItem title="Why Non-Profit?">
                        Our focus is long-term, building a thriving tech
                        community that continues beyond any single individual,
                        ensuring stability and lasting impact
                     </GridListItem>
                     <GridListItem title="Community Access">
                        Our non-profit status often allows us to secure
                        affordable event venues, making our programs accessible
                        and inclusive for a wider range of participants
                     </GridListItem>
                     <GridListItem title="Transparency and Trust">
                        The IRS exemption process requires stringent financial
                        oversight, demonstrating our commitment to responsible
                        resource management and reinvestment back into the
                        community
                     </GridListItem>
                     <GridListItem title="Donor Advantages">
                        Contributions to DEVSA are tax-deductible for donors,
                        encouraging greater support from individuals and
                        organizations within the community
                     </GridListItem>
                     <GridListItem title="Funding Flexibility">
                        As a non-profit, we can seek grants, sponsorships, and
                        donations specifically dedicated to furthering our
                        mission and programs
                     </GridListItem>

                     <GridListItem title="Dual Focus Approach">
                        This approach combines the expertise of our Board in two
                        key areas: Developer Experience and Strategic Expertise
                     </GridListItem>
                  </GridList>
               </Container>
            </div>
         </div>
      </>
   );
}