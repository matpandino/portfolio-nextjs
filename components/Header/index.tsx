import React, { useState } from "react";
import Link from "next/link";

import {
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
  FaEnvelope,
  FaBars,
} from "react-icons/fa";

import {
  Container,
  Title,
  SocialContainer,
  BurguerMenuContainer,
  MenuContainer,
  TitleSocialContainer,
} from "./styles";

const Header: React.FC = () => {
  const [isMenuShrinked, setIsMenuShrinked] = useState(true);

  return (
    <Container>
      <TitleSocialContainer>
        <Title>
          <Link href="#">pandino.me</Link>
        </Title>

        <SocialContainer>
          <a
            href="https://www.linkedin.com/in/matpandino/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn size={23} />
          </a>
          <a
            href="https://github.com/matpandino"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={23} />
          </a>
          <a href="https://api.whatsapp.com/send?phone=5548984653226&text=Ol%C3%A1%2C%20tudo%20bem%3F%20">
            <FaWhatsapp size={23} />
          </a>
          <a href="mailto:matpandino@gmail.com">
            <FaEnvelope size={23} />
          </a>
        </SocialContainer>
      </TitleSocialContainer>

      <MenuContainer>
        <div>
          <Link href="#sobre-mim">Sobre Mim</Link>
          <Link href="#projects">Projetos</Link>
          {/*<Link href="#projects">Posts</Link>
          <Link href="#projects">Contato</Link> */}
        </div>
      </MenuContainer>

      <BurguerMenuContainer shrinked={isMenuShrinked}>
        <FaBars onClick={() => setIsMenuShrinked(!isMenuShrinked)} />
        <div>
          <Link href="#sobre-mim">Sobre Mim</Link>
          <Link href="#projects">Projetos</Link>
          {/* <Link
            href="#projects"
            scroll={(el) =>
              el.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
          >
            Posts
          </Link>
          <Link href="#projects">Contato</Link> */}
        </div>
      </BurguerMenuContainer>
    </Container>
  );
};

export default Header;
