import React from "react";
import "./Techstacks.css";
import { FaReact, FaNodeJs, FaAws, FaHtml5 } from "react-icons/fa";
import {
  SiRedux,
  SiHtml5,
  SiMaterialui,
  SiExpress,
  SiRedis,
  SiTailwindcss,
  SiNetlify,
  SiFlutter,
  SiDart,
  SiPhp,
  SiPython
} from "react-icons/si";
import { DiCss3, DiFirebase, DiLinux, DiMongodb, DiSqllite } from "react-icons/di";
import { SiJavascript, SiHeroku } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap, BsWordpress } from "react-icons/bs";

export const Techstacks = () => {
  return (
    <>
      <div className="section main" data-aos="fade-right">
        <h2 className="section__title different">Skills</h2>
        <div className="techsection">
          <div>
            <SiFlutter />
            <h5>Flutter</h5>
          </div>
          <div>
            <SiDart />
            <h5>Dart</h5>
          </div>
          <div>
            <DiFirebase />
            <h5>CSS</h5>
          </div>
          <div>
            <DiSqllite />
            <h5>Sqllite</h5>
          </div>
          <div>
            <FaHtml5 />
            <h5>Html</h5>
          </div>
          <div>
            <DiCss3 />
            <h5>Css</h5>
          </div>

          <div>
            <SiPhp />
            <h5>Php</h5>
          </div>

          <div>
            <FaNodeJs />
            <h5>NodeJS</h5>
          </div>
          <div>
            <DiMongodb />
            <h5>MongoDB</h5>
          </div>
          <div>
            <DiLinux />
            <h5>Linux</h5>
          </div>
          <div>
            <SiPython />
            <h5>Python</h5>
          </div>
          <div>
            <VscGithub />
            <h5>Github</h5>
          </div>
        </div>
      </div>
    </>
  );
};
