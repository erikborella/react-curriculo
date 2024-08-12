import { Avatar, Box, Card, CardContent, Grid, Typography } from "@mui/material";

interface TechGridCardProps {
    techs: { name: string; imageUrl: string }[];
}

const TechGridCard: React.FC<TechGridCardProps> = ({ techs }) => {
    return (
        <Card sx={{ padding: 2, minWidth: '350px', height: '100%' }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Tecnologias
                </Typography>
                <Grid container spacing={3} sx={{ marginTop: 1 }}>
                    {techs.map((tech, index) => (
                        <Grid item xs={4} sm={3} key={index}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                }}
                            >
                                <Avatar
                                    alt={tech.name}
                                    src={tech.imageUrl}
                                />
                                <Typography variant="body1" sx={{ marginTop: 1 }}>
                                    {tech.name}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </CardContent>
        </Card>
    );
}

export default TechGridCard;