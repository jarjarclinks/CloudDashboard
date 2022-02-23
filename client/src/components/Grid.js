import Card from './Card'
const dashboards = [
  "https://public.tableau.com/views/Action_16450857667920/GenreRelativePopularity?:language=en-US&:display_count=n&:origin=viz_share_link",
  "https://10ax.online.tableau.com/t/developmentonlydev595736/views/SocialMediaKPIs/kpi2",
  "https://10ax.online.tableau.com/t/developmentonlydev595736/views/SocialMediaKPIs/kpi3",
  "https://10ax.online.tableau.com/t/developmentonlydev595736/views/SocialMediaKPIs/kpi4",
  "https://10ax.online.tableau.com/t/developmentonlydev595736/views/SocialMediaKPIs/kpi5",
  "https://10ax.online.tableau.com/t/developmentonlydev595736/views/SocialMediaKPIs/kpi6",
  "https://10ax.online.tableau.com/t/developmentonlydev595736/views/SocialMediaKPIs/kpi7",
  "https://10ax.online.tableau.com/t/developmentonlydev595736/views/SocialMediaKPIs/kpi8",
  "https://10ax.online.tableau.com/t/developmentonlydev595736/views/SocialMediaKPIs/kpi9",
  "https://10ax.online.tableau.com/t/developmentonlydev595736/views/SocialMediaKPIs/kpi10",
  "https://10ax.online.tableau.com/t/developmentonlydev595736/views/SocialMediaKPIs/kpi11",
  "https://10ax.online.tableau.com/t/developmentonlydev595736/views/SocialMediaKPIs/kpi12",
]

export default function Grid(){
  return(
    <Card dashboard = {dashboards[0]}/>
  )
}