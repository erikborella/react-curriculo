import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";

interface DescriptionCardProps {
    description: string;
    interests: string[];
    colleges: string[];
}

const DescriptionCard: React.FC<DescriptionCardProps> = ({ description, interests, colleges }) => {
    return (
        <Card
            variant="outlined"
            sx={{
                display: 'flex',
                flexDirection: 'row',
                padding: 2,
                height: '100%',
                minWidth: '450px'
            }}
        >
            <CardContent sx={{ display: 'flex', flex: 1}}>

                <Box display='flex' flexDirection='column' flex={1}>

                    <Box 
                        display='flex'
                        flexDirection='row'
                        gap={5}
                        flex={1}
                    >

                        <Box
                            display='flex'
                            flexDirection='column'
                            flexWrap='wrap'
                            flex={1}
                        >
                            <Typography variant="h6">
                                Apresentação
                            </Typography>

                            <Typography variant="body2" textAlign='justify'  sx={{ marginTop: 1 }}>
                                {/* Desenvolvedor Pleno com mais de 4 anos de experiência em desenvolvimento de software. Atualmente, trabalho na NDD.tech, onde participo de projetos desafiadores na área de P&D. Minhas principais habilidades profissionais incluem C#, Angular e infraestrutura como Docker, Azure e AKS. */}
                                { description }
                            </Typography>
                        </Box>

                        <Box
                            display='flex'
                            flexDirection='column'
                            flexWrap='wrap'
                            flex={1}
                        >
                            <Typography variant="h6">
                                Interesses
                            </Typography>

                            <Box component='ul' sx={{ marginTop: 1, paddingLeft: 2 }}>
                                {interests.map((interest) => (
                                    <li><Typography variant="body2" textAlign='justify'>{interest}</Typography></li>
                                ))}
                            </Box>
                        </Box>
                    </Box>

                    <Box marginTop={2}>
                        <Typography variant="h6">
                            Formações e Certificações
                        </Typography>

                        <Box component='ul' sx={{ marginTop: 1, paddingLeft: 2 }}>
                            {colleges.map((college) => (
                                <li><Typography variant="body2" textAlign='justify'>{college}</Typography></li>
                            ))}
                        </Box>
                    </Box>

                </Box>
            </CardContent>
        </Card>
    );
};

export default DescriptionCard;