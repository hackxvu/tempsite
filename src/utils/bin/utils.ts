import packageJson from '../../../package.json';
import * as bin from './index';

export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');

  return `Available commands:\n${commands}\n\n[tab]\t trigger completion.\n[ctrl+l] clear terminal.\n[ctrl+c] cancel command.`;
};

export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return 'guest';
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const  about =(args?: string[]): string => {
  return `
<h2>About us:</h2>
-------------------
-------------------
HackxVU is the Official Cybersecurity Community affiliated to Vishwakarma University, Pune! 
Security and hacking is all we talk about! 👨‍💻
-------------------
-------------------
<h2>Support us on:</h2>
-------------------------------------------------------------------
<a href="https://instagram.com/hackxvu/">Instagram</a><br>
<a href="https://www.linkedin.com/company/hackxvu">LinkedIn</a><br>
<a href="https://github.com/hackxvu">Github</a><br>
<a href="https://instagram.com/hackxvu/">Instagram</a><br>
-------------------------------------------------------------------
-------------------------------------------------------------------
<h2>The Team:</h2>
-------------------------------------------------------------------
1. <a href="https://kapilvarma.me">Kapil Varma</a>: Founder, HackxVU.
2. Yash Kulkarni: Co-founder, HackxVU.
-------------------------------------------------------------------
`;
};

export const email = async (args: string[]): Promise<string> => {
  window.open('mailto:kapilarts123@gmail.com');

  return 'Opening mailto:kapilarts123@gmail.com...';
};

export const vi = async (args: string[]): Promise<string> => {
  return `why use vi? try 'emacs'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `why use vim? try 'emacs'.`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `really? emacs? you should be using 'vim'`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  setTimeout(function () {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  }, 1000);

  return `Permission denied: unable to run the command '${args[0]}' as root.`;
};

export const linktree = async (args?: string[]): Promise<string> => {
  setTimeout(function () {
    window.open('https://linktr.ee/hackxvu', '_blank');
  }, 1000);

  return 'Opening our Linktree...';
};

export const join = async (args?: string[]): Promise<string> => {
  window.open('https://chat.whatsapp.com/FNa1VZ869kELdVVihChyYY', '_blank');

  return 'Opening donation url...';
};

export const banner = (args?: string[]): string => {
  return `

 '||'  '||'                 '||              '||'  '|' '||'  '|' 
  ||    ||   ....     ....   ||  ..  ... ...  '|.  .'   ||    |  
  ||''''||  '' .||  .|   ''  || .'    '|..'    ||  |    ||    |  
  ||    ||  .|' ||  ||       ||'|.     .|.      |||     ||    |  
 .||.  .||. '|..'|'  '|...' .||. ||. .|  ||.     |       '|..'   

--
<h2>This is an official Cybersecurity Community affiliated to <a href="https://www.vupune.ac.in/">Vishwakarma University, Pune</a>.</h2>
--
Type 'help' to see list of available commands.
New : Try out the new 'theme' command. See all available themes.
New : New command 'neofetch', for you linux.
--
`;
};
