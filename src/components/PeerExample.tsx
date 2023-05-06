import React from 'react'

export default function PeerExample() {
  return (
    <div>

      <fieldset>
      <legend>Published status</legend>

      <input id="draft" className="peer/draft" type="radio" name="status" checked />
      <label htmlFor="draft" className="peer-checked/draft:text-sky-500">Draft</label>

      <input id="published" className="peer/published" type="radio" name="status" />
      <label htmlFor="published" className="peer-checked/published:text-sky-500">Published</label>

      <div className="hidden peer-checked/draft:block">Drafts are only visible to administrators.</div>
      <div className="hidden peer-checked/published:block">Your post will be publicly visible on your site.</div>
      <label>
      <input type="email" className="peer "/>  
      <span className="peer-invalid:text-red-500 ">Email</span>
    </label>
    </fieldset>
  </div> 
  )
}
