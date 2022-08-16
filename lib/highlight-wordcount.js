'use babel';

import HighlightWordcountMessageDialog from './highlight-wordcount-message-dialog';

module.exports = {

  activate() {
    inkdrop.components.registerClass(HighlightWordcountMessageDialog);
    inkdrop.layouts.addComponentToLayout(
      'modal',
      'HighlightWordcountMessageDialog'
    )
  },

  deactivate() {
    inkdrop.layouts.removeComponentFromLayout(
      'modal',
      'HighlightWordcountMessageDialog'
    )
    inkdrop.components.deleteClass(HighlightWordcountMessageDialog);
  }

};
