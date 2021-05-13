<script>

    import {
      Modal,
      ModalBody,
      ModalHeader
    } from 'sveltestrap';

    export let thePopImages;
    let open = false;
    let size = '';
    let modalURL;
    let modalTitle;

    const toggle = () => {
        size = 'lg';
        open = !open;
    };

    const showImgPop = (imgNdx) => {
        modalURL   = thePopImages[imgNdx].url;
        modalTitle = thePopImages[imgNdx].title;
        toggle();
    }


    function showFunctions() 
    {

        var functionNames = [];

        for (var f in window) 
        {

                // if (window.hasOwnProperty(f) && typeof window[f] === 'function') {
                //     functionNames.push(f);
                // }

            if (typeof window[f] === 'function') {
                functionNames.push(f);
                }
        }

        console.log(functionNames);

    }

  </script>
  
  <div>

    <a href 
        on:click|preventDefault={()=>showFunctions()}
    >
    click to show functions
    </a>

    There will be a bunch of text, then a 
    <a 
        href
        on:click|preventDefault={()=>showImgPop(0)}
    >
         link-to-click 
    </a>
    that will show the popup
    modal dialog. And after that we can have a 

    <a 
        href
        on:click|preventDefault={()=>showImgPop(1)}
    >
    second-link 
    </a>

    <a 
        href
        on:click|preventDefault={()=>showImgPop(2)}
    >
    third 
    </a>

    to popup a different image.

    <Modal isOpen={open} {toggle} {size}>
      <ModalHeader {toggle}>{modalTitle}</ModalHeader>
      <ModalBody>
        <img src={modalURL} class="popUpImg" alt="popup usually from a newspaper">
      </ModalBody>
    </Modal>

  </div>

  <style>

      .popUpImg {
          margin-left: auto;
          margin-right: auto;
          display: block;
      }

  </style>