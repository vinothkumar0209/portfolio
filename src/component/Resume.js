import React from 'react'
import ResumeImg from '../assets/resumeImg.gif' 

function Resume() {

  const config = {
       link : ''
  }
  return (
    <section id='Resume' className='flex flex-col md:flex-row bg-secondary px-5'>
        <div className='py-5 md:w-1/2 flex justify-center md:justify-end '>
            <img className='w-[300px] h-[300px]' src={ResumeImg} />
        </div>
        <div className='md:w-1/2 flex justify-center text-white'>
           <div className='flex flex-col items-center justify-center'>
            <h1 className='text-4xl mb-5 w-[140px] font-bold text-sky-400'>Resume</h1>
            <p className='pb-5'>You can view my resume</p>
            <p><a className='btn' href='https://www.pdffiller.com/jsfiller-desk18/?PAGE_REARRANGE_V2_MVP=true&act-notary-pro-integration=true&flat_pdf_quality=high&isPageRearrangeV2MVP=true&isSkipEditorLoadFrequency=true&jsf-desktop-ux-for-tablets=false&jsf-fake-edit-embedded=true&jsf-min-fields-width=true&jsf-offline-mode=false&jsf-page-rearrange-v2=true&jsf-probability-70=true&jsf-redesign-full=true&jsf-socket-io=false&projectId=1759029954&requestHash=6a3bf5be4b25e66ed0ece78c7b8f79fd738ce7f398ea3fe8bd5775952fe3dadb&richTextFormatting=true&routeId=a761b3717745806090d8f409dc0af62f#b47b11c522444624b0b404139503ad10'>Download</a> </p>
           </div>
        </div>
    </section>
  
  )
}
export default Resume

