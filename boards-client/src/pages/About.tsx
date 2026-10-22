import '../App.css';
import { Container, Stack } from '@mui/material';
import { theme } from '../components/Theming';

function About() {
  return (
    <div className="App">
      <header className="App-header">

        <Stack direction={"row"}>
          <Container style={{ width: 400, backgroundColor: theme.palette.secondary.main + "60", margin: 10, padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h4.fontSize }}>
            <Container style={{ backgroundColor: theme.palette.secondary.main + "60", marginRight: 10, marginBottom: 10, padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h4.fontSize }}>
              Contact Info
            </Container>

            <Container style={{ backgroundColor: theme.palette.secondary.main + "60", flex: 10, fontSize: theme.typography.h6.fontSize, padding: 10 }}>
              <Stack >
                <div>Aidan Davidson</div>
                <div>aidan.davidson099@gmail.com</div>
                <div>(623) 249-8639</div>
              </Stack>

            </Container>
          </Container>
          <Container style={{ width: 400, backgroundColor: theme.palette.secondary.main + "60", margin: 10, padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h4.fontSize }}>
            <Container style={{ backgroundColor: theme.palette.secondary.main + "60", marginRight: 10, marginBottom: 10, padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h4.fontSize }}>
              Links
            </Container>

            <Container style={{ backgroundColor: theme.palette.secondary.main + "60", flex: 10, fontSize: theme.typography.h6.fontSize, padding: 10 }}>
              <Stack>
                <a href="https://www.linkedin.com/in/aidan-davidson-0877a21a1/" target="_blank" rel="noreferrer" >
                  LinkedIn
                </a>
                <a href="https://harleyposter.itch.io" target="_blank" rel="noreferrer" >
                  Itch.io
                </a>
                <a href="https://www.youtube.com/channel/UCsuseZMKy1GnPkU9Z3gEUIw" target="_blank" rel="noreferrer" >
                  Youtube
                </a>
              </Stack>
            </Container>
          </Container>
        </Stack>

        <Container style={{ backgroundColor: theme.palette.secondary.main + "60", margin: 10, padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h4.fontSize }}>
          <Container style={{ backgroundColor: theme.palette.secondary.main + "60", marginRight: 10, marginBottom: 10, padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h4.fontSize }}>
            About Me
          </Container>

          <Container style={{ backgroundColor: theme.palette.secondary.main + "60", flex: 10, flexDirection: "row", textAlign: "left", fontSize: theme.typography.h6.fontSize, padding: 10 }}>
            &ensp;&ensp;&ensp;Hi, I'm Aidan Davidson, a Game Programmer and proud graduate of the University of
            Advancing Technology (UAT) with a degree in Game Programming. I've spent the
            past eight years building games and interactive experiences using tools and
            technologies such as Unreal Engine, Unity, C++, C#, Java, React, and SQL.
            My journey started as a kid sitting in front of a screen, and I was amazed by the worlds, stories,
            and experiences that video games provided. As I learned more about what goes on
            behind the scenes, I realized I wanted to be part of bringing those worlds to life. Since then, I've worked
            on dozens of projects of all sizes, experimenting with different engines, genres, and
            programming languages. Every project has taught me something new and pushed me
            closer to becoming the developer I aspire to be.
            Today, my mission is to create games that leave a lasting impact on players. Just as
            games inspired me to follow this path, I hope my work inspires the next generation of
            developers and gamers.
          </Container>
        </Container>



        <Container style={{ backgroundColor: theme.palette.secondary.main + "60", margin: 10, padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h4.fontSize }}>
          <Container style={{ backgroundColor: theme.palette.secondary.main + "60", marginRight: 10, marginBottom: 10, padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h4.fontSize }}>
            Community Statement
          </Container>



          <Container style={{ backgroundColor: theme.palette.secondary.main + "60", flex: 10, flexDirection: "row", textAlign: "left", fontSize: theme.typography.body1.fontSize, padding: 10 }}>
            &ensp;&ensp;&ensp;The community I proudly call home is the video game development industry. It is a
            community that has played a major role in shaping whodd I am today. From the veteran
            developers who created the games I grew up playing to the passionate newcomers
            building ambitious indie projects, every member of this industry has inspired me in some
            way.{"\n"}{"\n"}
            My dream has always been to contribute to the games that
            bring joy, excitement, and inspiration to players around the world. Whether that means
            joining a large studio, collaborating with a dedicated team, or forging my own path, I
            know that game development will always be a part of my life. More than anything, I
            hope to create experiences that push the boundaries of what a video game can be and
            leave a lasting impact on the industry.{"\n"}{"\n"}
            My journey of becoming a game developer has been challenging, rewarding, and filled with
            opportunities to learn. Every obstacle I've overcome, every project I've completed, and
            every idea I've brought to life has been made possible through the support and
            knowledge shared by this community. One of the things I value most about game
            development is how people continuously help one another. Whether it's answering
            programming questions, reporting software issues, sharing tutorials, or offering
            feedback, there is always someone willing to lend a hand. There will be
            countless opportunities to give a hand back and help others developers grow.
            The game development industry thrives through collaboration, creativity, and
            constructive feedback. Developers challenge one another to improve through forums,
            discussions, game reviews, and events such as game jams. I have personally
            participated in five CodeDay Game Jams, several of which resulted in projects featured
            on this website. These Game Jams pushed me to think creatively, work under pressure,
            and strengthen my skills as both a programmer and a teammate.{"\n"}{"\n"}
            I also had the opportunity to participate in a larger game jam hosted by another
            university. Over the course of three weeks, my team transformed an ambitious idea into
            a finished project called PowerHouse, which remains one of the projects I am most
            proud of today. The experience tested our abilities, challenged our creativity, and
            further enforced my passion for game development.{"\n"}{"\n"}
            The game development community is driven by a simple goal: create experiences that bring
            people joy. For me, however, there is an even greater purpose. The most important
            thing I could do is inspire others. I hope to one day encourage creativity and nurture the passion of others, and push them to discover what they are capable of achieving. Using the skills, knowledge,
            and experiences I have gained throughout my education and development journey, I am
            committed to contributing to this community, helping it grow, and inspiring the next
            generation of creators just as others inspired me.
          </Container>
        </Container>




      </header>
    </div>
  );
}

export default About;
