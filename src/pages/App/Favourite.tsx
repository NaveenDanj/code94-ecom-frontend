import MainBar from '../../components/MainBar'
import editIcon from '../../assets/icons/edit-icon.svg'
import deleteIcon from '../../assets/icons/delete-icon.svg'
import starredIcon from '../../assets/icons/starred.svg'


function Favourite() {
  return (
    <div className="tw-w-full tw-flex tw-flex-col tw-p-10">
        
        <div className="tw-mt-1 tw-mb-5">
            <label className="tw-text-[36px] tw-font-[900] tw-tracking-[0.2em] ">FAVOURITE PRODUCTS</label>
        </div>

        <MainBar />

        <div className="tw-w-full tw-grid tw-grid-cols-5  tw-mt-3 tw-p-5">
            
            <div className="tw-flex tw-justify-start tw-my-auto">
                <label className="tw-text-[19px] tw-font-[700] tw-text-[#001EB9]">SKU</label>
            </div>

            <div className="tw-flex tw-justify-center tw-my-auto">
                <label className="tw-text-[19px] tw-font-[700] tw-text-[#001EB9]">IMAGE</label>
            </div>

            <div className="tw-my-auto tw-flex tw-justify-start">
                <label className="tw-text-[19px] tw-font-[700] tw-text-[#001EB9]">PRODUCT NAME</label>
            </div>

            <div className="tw-my-auto tw-flex tw-justify-center">
                <label className="tw-text-[19px] tw-font-[700] tw-text-[#001EB9]">Quantity</label>
            </div>

            <div className=""></div>

        </div>

        <div style={{ borderBottom : '1px solid rgba(150, 145, 145 , 0.3)' }} className="tw-w-full tw-grid tw-grid-cols-5  tw-mt-3 tw-p-5">

            <div className="tw-flex tw-justify-start tw-my-auto">
                <label className="tw-text-[19px] tw-font-[500] tw-text-[#162427]">#CA25</label>
            </div>

            <div className="tw-flex tw-justify-center tw-my-auto">
                <img className="tw-rounded-xl tw-w-[66px] tw-h-[66px]" src="https://avatars.githubusercontent.com/u/48654030?v=4" />
            </div>

            <div className="tw-my-auto tw-flex tw-justify-start">
                <label className="tw-text-[19px] tw-font-[500] tw-text-[#162427]">Product-name</label>
            </div>

            <div className="tw-my-auto tw-flex tw-justify-center">
                <label className="tw-text-[19px] tw-font-[500] tw-text-[#162427]">35</label>
            </div>

            <div className="tw-my-auto tw-flex tw-justify-center tw-gap-3">

                <img className="tw-w-[19px] tw-h-[19px] tw-cursor-pointer" src={deleteIcon} />
                <img className="tw-w-[19px] tw-h-[19px] tw-cursor-pointer" src={editIcon} />
                <img className="tw-w-[19px] tw-h-[19px] tw-cursor-pointer" src={starredIcon} />

            </div>

        </div>

    </div>
  )
}

export default Favourite