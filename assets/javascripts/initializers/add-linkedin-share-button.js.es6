import Sharing from 'discourse/lib/sharing';

export default {
  name: 'add-linkedin-share-button',

  initialize: function(container) {
    Sharing.addSource({
      id: 'linkedin',
      iconClass: 'fa-linkedin-square',
      generateUrl: function(link, title) {
        return "http://www.linkedin.com/shareArticle?mini=true&url=" + encodeURIComponent(link) + "&title=" + encodeURIComponent(title);
      },
      shouldOpenInPopup: true,
      popupHeight: 570
    });
  }
};
