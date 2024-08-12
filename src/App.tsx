import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box, Card, CardContent, Container, CssBaseline, Typography } from "@mui/material";
import ProfileCard from './components/profileCard/ProfileCard';
import TechGridCard from './components/techGridCard/TechGridCard';
import DescriptionCard from './components/descriptionCard/DescriptionCard';
import ProjectCard from './components/projectCard/ProjectCard';

import profilePhoto from './assets/photo.jpg';
import llvmImage from './assets/projects/llvm.png';
import bayesianImage from './assets/projects/beyesianProject.png';
import readingAppImage from './assets/projects/appLeituras.png';
import riscImage from './assets/projects/risc.png';
import amlbsImage from './assets/projects/amlbs.png';
import aStarImage from './assets/projects/aStarViewer.png';
import cSimpleJson from './assets/projects/cSimpleJson.png';

import angularIcon from './assets/icons/angular.svg';
import assemblyIcon from './assets/icons/assembly.svg';
import azureIcon from './assets/icons/azure.svg';
import cIcon from './assets/icons/c.svg';
import cplusplusIcon from './assets/icons/cplusplus.svg';
import csharpIcon from './assets/icons/csharp.svg';
import css3Icon from './assets/icons/css3.svg';
import dockerIcon from './assets/icons/docker.svg';
import flutterIcon from './assets/icons/flutter.svg';
import html5Icon from './assets/icons/html5.svg';
import javaIcon from './assets/icons/java.svg';
import javascriptIcon from './assets/icons/javascript.svg';
import kotlinIcon from './assets/icons/kotlin.svg';
import llvmIcon from './assets/icons/llvm.svg';
import nodejsIcon from './assets/icons/nodejs.svg';
import pythonIcon from './assets/icons/python.svg';
import reactIcon from './assets/icons/react.svg';
import rustIcon from './assets/icons/rust.svg';
import typescriptIcon from './assets/icons/typescript.svg';
import vuejsIcon from './assets/icons/vuejs.svg';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#ffb4a9'
        },
        secondary: {
            main: '#e7bdb7'
        }
    },
});

const techs = [
    { name: 'C#', imageUrl: csharpIcon },
    { name: 'Java', imageUrl: javaIcon },
    { name: 'LLVM', imageUrl: llvmIcon },
    { name: 'Rust', imageUrl: rustIcon },
    { name: 'C', imageUrl: cIcon },
    { name: 'C++', imageUrl: cplusplusIcon },
    { name: 'Assembly', imageUrl: assemblyIcon },
    { name: 'Python', imageUrl: pythonIcon },
    { name: 'HTML', imageUrl: html5Icon },
    { name: 'CSS', imageUrl: css3Icon },
    { name: 'Javascript', imageUrl: javascriptIcon },
    { name: 'TypeScript', imageUrl: typescriptIcon },
    { name: 'Node.js', imageUrl: nodejsIcon },
    { name: 'Vue', imageUrl: vuejsIcon },
    { name: 'Angular', imageUrl: angularIcon },
    { name: 'React', imageUrl: reactIcon },
    { name: 'Kotlin', imageUrl: kotlinIcon },
    { name: 'Flutter', imageUrl: flutterIcon },
    { name: 'Docker', imageUrl: dockerIcon },
    { name: 'Azure', imageUrl: azureIcon },
];

const description = 'Desenvolvedor Pleno com mais de 4 anos de experiência em desenvolvimento de software. Atualmente, trabalho na NDD.tech, onde participo de projetos desafiadores na área de P&D. Minhas principais habilidades profissionais incluem C#, Angular e infraestrutura como Docker, Azure e AKS. Além disso, estudo na área há mais de 7 anos tendo como principais interesses a área de compiladores e de programação em baixo nivel.';
const interests = [
    'Compiladores',
    'Programação em baixo nível',
    'Desenvolvimento Web',
    'Azure',
    'Idiomas | Filologia'
];
const colleges = [
    'IFC Campus Concórdia - Técnico para informática para internet | 2017 - 2019',
    'IFSC Campus Lages - Ciências da Computação | 2020 - 2024',
    'Certficação Microsoft: Azure Developer Associate (AZ-204) | 2022 - 2023',
    'Reconhecimento NDD: Desenvolvimento de pessoas | 2024'
];

function App() {
    return (
        <ThemeProvider theme={darkTheme} >
            <CssBaseline enableColorScheme />
            <Container maxWidth='xl'>
                <Box display='flex' alignItems='stretch' justifyContent='center' flexWrap='wrap' gap={1}>
                    <Box display='flex' flex='2' flexDirection='column' gap={1}>
                        <Box flex='1'>
                            <ProfileCard
                                name='Erik Pablo Schaefer Borela'
                                jobTitle='Desenvolvedor Pleno'
                                photoUrl={profilePhoto}
                                email='erikborella@gmail.com'
                                istagramLink='https://www.instagram.com/borellaerik'
                                githubLink='https://www.github.com/erikborella'
                            />
                        </Box>
                        <Box flex='1'>
                            <DescriptionCard description={description} colleges={colleges} interests={interests} />
                        </Box>
                    </Box>
                    <Box flex='1'>
                        <TechGridCard techs={techs} />
                    </Box>
                </Box>

                <Card variant='outlined' sx={{ display: 'flex', flex: 1, marginTop: 1 }}>
                    <CardContent>
                        <Typography gutterBottom variant='h5' component='div'>
                            Projetos
                        </Typography>

                        <Box display='flex' flexWrap='wrap' justifyContent='center' marginTop={2} gap={1}>
                            <Box display='flex' flex={1} minWidth='300px' justifyContent='center'>
                                <ProjectCard 
                                    title="Compilador LLVM com analise de complexidade de código"
                                    imageUrl={llvmImage}
                                    description="Esse projeto é um compilador escrito em Java que realiza a compilação de um código semelhante ao C para a linguagem intermedia do LLVM, além de conseguir executar uma analise estatica do código para obter dados sobre a complexidade dos algoritmos."
                                    githubLink="https://github.com/erikborella/projeto-compiladores-ifsc"
                                />
                            </Box>
                            <Box display='flex' flex={1} minWidth='300px' justifyContent='center'>
                                <ProjectCard 
                                    title="Interpretador AMLBS"
                                    imageUrl={amlbsImage}
                                    description="AMLBS (Another Mathematical Language But Simpler) é um interpretador experimental para uma linguagem funcional simplificada usando como base StackMachines e evaluações de expressões de forma recursiva."
                                    githubLink="https://github.com/erikborella/AMLBS"
                                />
                            </Box>
                            <Box display='flex' flex={1} minWidth='300px' justifyContent='center'>
                                <ProjectCard 
                                    title="Emulador de hardware RISC"
                                    imageUrl={riscImage}
                                    description="Esse emulador consegue executar um conjunto de instruções RISC reduzido, com a sintaxe baseada no ASM Intel. Oferece opções de deburação do assembly como a visualização de registradores e de dados na head."
                                    githubLink="https://github.com/erikborella/RISC-Emulator"
                                />
                            </Box>
                            <Box display='flex' flex={1} minWidth='300px' justifyContent='center'>
                                <ProjectCard 
                                    title="Recomendação de hardware usando redes bayesianas"
                                    imageUrl={bayesianImage}
                                    description="Desenvolido em Java, nesse projeto é apresentado ao usuário definir qual o uso que o computador terá e o preço que deseja gastar, esses dados então são enviadas para um rede bayesiana que irá dizer ao usuário o melhor hardware para as configurações especificadas."
                                    githubLink="https://github.com/erikborella/pc-recomendation-bayesian-network"
                                />
                            </Box>
                            <Box display='flex' flex={1} minWidth='300px' justifyContent='center'>
                                <ProjectCard 
                                    title="Gerenciador de leituras para Android"
                                    imageUrl={readingAppImage}
                                    description="Esse aplicativo é desenvolvido com React Native a biblioteca de componentes React Paper, permitindo ao usuário gerenciar as leituras, ter um historico de anotações e criar um cronograma de leitura."
                                    githubLink="https://github.com/erikborella/react-native-readings-app"
                                />
                            </Box>
                            <Box display='flex' flex={1} minWidth='300px' justifyContent='center'>
                                <ProjectCard 
                                    title="A* Viewer"
                                    imageUrl={aStarImage}
                                    description="Nesse projeto é possivel visualizar de forma interativa o funcionamento do algoritmo A*."
                                    githubLink="https://github.com/erikborella/A-star_viewer"
                                />
                            </Box>
                            <Box display='flex' flex={1} minWidth='300px' justifyContent='center'>
                                <ProjectCard 
                                    title="C Simple JSON"
                                    imageUrl={cSimpleJson}
                                    description="Ainda em desenvolvimento, é um projeto em C que implementa um biblioteca para JSON, capaz realizar o parse de suas estruturas para objetos."
                                    githubLink="https://github.com/erikborella/c-simple-json"
                                />
                            </Box>
                        </Box>
                    </CardContent>
                </Card>

            </Container>
        </ThemeProvider>
    )
}

export default App