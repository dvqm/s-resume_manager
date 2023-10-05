  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => resolve(event.target.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  const ArticleHandlers = (rubric, setIsEdit, resumeDispatch, resume, setOriginal, original) => {
    return {
      async update(field, e) {
        if (field === 'photo' && e !== '') {
          try {
            const base64String = await fileToBase64(e.target.files[0]);
            resumeDispatch({ t: 'ART_CHANGE', p: [rubric, { [field]: base64String }] });
          } catch (error) {
            console.error('Error converting file to Base64:', error);
          }
        }
        else if (field === 'photo' && e === '') {
          resumeDispatch({ t: 'ART_CHANGE', p: [rubric, { [field]: '' }] });
        } else {
          resumeDispatch({ t: 'ART_CHANGE', p: [rubric, { [field]: e.currentTarget.value }] });
        }
      },

      edit() {
        setOriginal(resume[rubric]);
        setIsEdit(true);
      },

      save(e) {
        e.preventDefault();
        setIsEdit(false);
      },

      cancel(e) {
        e.preventDefault();
        resumeDispatch({ t: 'ART_UPD', p: [rubric, original] });
        setIsEdit(false);
      },

      clear(e) {
        e.preventDefault();
        resumeDispatch({ t: 'ART_CLEAR', p: [rubric] });
      },
    };
  };

  export default ArticleHandlers;
