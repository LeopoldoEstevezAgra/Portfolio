<?php

namespace AppBundle\Form;

use AppBundle\Entity\Project;
use Symfony\Component\Form\AbstractType;

use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Vich\UploaderBundle\Form\Type\VichImageType;

use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;



class ProjectType extends AbstractType
{
    /**
     * @param FormBuilderInterface $builder
     * @param array $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add("name",TextType::class , [
                "label" => "Title:",
            ])
            ->add("description",TextareaType::class, [
                "label" => "Description:",
                "attr"=>[
                    "rows"=>"10",
                    "class"=>"summernote"
                ]
            ])
            ->add("link",TextType::class , [
                "label" => "Link:",
            ])
            ->add("relatedLink",TextType::class , [
                "label" => "Related link:",
            ])

            ->add("startDate", DateTimeType::class, [
                "label" => "Start date",
                "widget" => "single_text",
                "format" => "dd/MM/yyyy",
                "attr" => [
                    "class" => "datepicker",
                    "data-date-format"=>"dd/mm/yyyy"
                ]
            ])
            ->add("submit",SubmitType::class,[
                "label" => " Add",
                "attr" => [
                    "class"=> "fas fa-plus submit-button"
                ]
            ])

            ->add('imageFile', VichImageType::class, [
                'label'=>'Select an example image ( Optional )',
                'required' => false,
                'allow_delete' => true,
            ]);

    }
    /**
     * @param OptionsResolver $resolver
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => 'AppBundle\Entity\Project',
            'user' => null,
        ));
    }

}
