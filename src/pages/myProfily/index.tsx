// Styles
import { Container, Flex } from "@/styles/Global";
import { H2Title, TextProfile } from "./style";


export const AboutMe = (): JSX.Element => {
  return (
    <section id="about-me">
        <Container>
        <H2Title>About Me</H2Title>
        <TextProfile>
            I'm a Front-End programmer in career transition, with experience in
            HTML5, CSS3, JavaScript (ES6), Git, React and TypeScript. I have
            advanced knowledge in Front-End development, especially in using React
            to create interactive and responsive interfaces. In addition, I use Git
            for version control and efficient collaboration. I'm a fan of agile
            methodologies, such as SCRUM. I am always up to date with industry
            trends and best practices and am committed to providing high quality web
            development solutions.
        </TextProfile>
        </Container>

    </section>
  );
};
