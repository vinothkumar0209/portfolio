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
            <p><a className='btn' href='https://www.pdffiller.com/jsfiller-desk14/?acc-share-button-in-editor=true&flat_pdf_quality=high&isSkipEditorLoad
                                        Frequency=true&jsf-all-tools-tab=false&jsf-all-tools-tab-branch-b=false&jsf-context-menu-to-right-panel=false&jsf-
                                        context-menu-to-right-panel-branch-b=false&jsf-disable-autosave=true&jsf-disable-browser-translation=false&jsf-edit
                                        or-pdfjs-five=true&jsf-fake-edit-embedded=true&jsf-fake-edit-stream-editing=true&jsf-heading-bold=true&jsf-offline-
                                        mode=false&jsf-page-rearrange-v2=true&jsf-probability-70=true&jsf-redesign-full=true&jsf-simplified-modes-iteration
                                        -1=true&jsf-socket-io=false&jsf-web-mobile-new-filling-experience=false&projectId=1954073326&requestHash=52ee863be1
                                        1a9792a6fd45d7d767f680516441445365b4272adafa13b81d9034&richTextFormatting=true&routeId=b03ceb8edd8b5e953700
                                        9beb5f957f3d&traceparent=00-e58dbc0affd4d945c68041cfa4537f4a-058694400ecdfa77-00#f8b4b664fd5a4740bb1c6c5dee
                                        7f061f'>Download</a> </p>
           </div>
        </div>
    </section>
  
  )
}
export default Resume

