import Image from 'next/image';
import iconMap from '../../public/iconMap';
import Separator from '../Separator/Separator';

interface IProps{
  data:{
    title: string;
    role:string;
    technologies: string[];
    description: string;
    development: string;
    img:string | null;
    demo:string | null;
    github:string | null;
  }
}

export default function Project(props:IProps){
  const {data} = props;
  
  // Add your own svg icons to the Map in the iconmap file in components/iconMap/index.tsx
  // Where the compared expression (name) is in your projectData.js file in the technologies array.
  // this function returns the svg file to retrieve for the corresponding technology name and the size

  const getSvgSize = (name:string):number=>{ 
    const dataInfo = iconMap.get(name);
    if(!dataInfo){
      return 60;
    }
    const strFormat = dataInfo[1].toString();
    return parseInt(strFormat); 
  }

  const getSvgUrl = (name:string):string=>{ 
    const res = iconMap.get(name);
    if(!res){
      return "";
    }
    const ret:string = res[0].toString();
    return ret;
  }

  return (
    <div>
    {/* <div className="flex-container">
      <div className='flex-child magenta'> */}
        <div className='sectionContentContainer'>
        <h1 className="projectTitle">{data.title}</h1>
        <h3 className="role">{data.role}</h3>
        <p className='description'>{data.description}</p>
        <h3 className="role">Development</h3>
        <p className='development'>{data.development}</p>

        {(data.github!=null || data.demo!=null) &&
        <div className='hrefContainer'>
          {
          data.github!=null && 
          <div className='otherDiv one'>
             <a href={data.github} target='_blank' className="viewCodeHref">
              Github 
            </a>            
          </div>
          }
          {
          data.demo!=null &&
          <div className='otherDiv two'>
             <a href={data.demo} target='_blank' className="viewCodeHref">
              Link 
            </a>
          </div>
          }
        </div>
        }
        {
          data.technologies.map((singleTech:string,key:number)=>{
            const svgUrl = getSvgUrl(singleTech);
            const svgSize = getSvgSize(singleTech);
            // console.log(singleTech,svgSize);
            return(
              <img className='technologies' key={key} width={svgSize} src={svgUrl} alt="[svg]" />
            )
          })
        }
      </div>
    <Separator/>
    </div>
  )
}
