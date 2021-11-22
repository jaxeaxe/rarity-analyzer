import { NftProjectsLoader } from "./nft-projects";

export const HomePage = ()=>{

    return (
        <div
            style={{display:'flex', flexDirection:'column', justifyContent:'space-between', alignItems:'center', minHeight:'calc(100vh - 100px)'}}>
            <div style={{width: '100%'}}>
            <NftProjectsLoader/>
            </div>
            
           </div>
    );
};

